const express = require('express');
const Sequelize = require('sequelize');
const dotenv = require('dotenv');
const cors = require('cors');
const bcrypt = require('bcrypt');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
app.set('view engine','ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static('public'));

const PORT = 5000 || process.env.PORT
const result = dotenv.config();

const Op = Sequelize.Op

app.use(cors());

// ----------------------------------------------------------------------
// | Sequelize Config |
// ----------------------------------------------------------------------

const sequelize = new Sequelize('bg_store', 'postgres', 'Giraffes94', {

  // host: 'localhost',
  // port: '5432',
  dialect: 'postgres',
  operatorsAliases: {
    $and: Op.and,
    $or: Op.or,
    $eq: Op.eq,
    $regexp: Op.regexp,
    $iRegexp: Op.iRegexp,
    $like: Op.like,
    $iLike: Op.iLike
  }
});

const Config = sequelize.define('config', {

  username: Sequelize.STRING(10000),
  password: Sequelize.STRING(10000),
  collections: Sequelize.ARRAY(Sequelize.TEXT)

});

const Collection = sequelize.define('collection', {

  name: Sequelize.STRING(10000),
  content: Sequelize.JSON

});

Config.create({
  username: 'bg-admin',
  password: 'admin',
  collections: ["word-art", "collage", "painting", "comic-concepts"]
});

sequelize.sync();


// const sequelize = new Sequelize(process.env.DATABASE_URL,  {
//
// 	logging: true,
// 	ssl: true,
// 	dialect: 'postgres',
// 	protocol: 'postgres',
// 	operatorsAliases:{
// 		$and: Op.and,
// 		$or: Op.or,
// 		$eq: Op.eq,
// 		$regexp: Op.regexp,
// 		$iRegexp: Op.iRegexp,
// 		$like: Op.like,
// 		$iLike: Op.iLike
// 	}
// });

// ----------------------------------------------------------------------
// | PassportJS Config |
// ----------------------------------------------------------------------

app.use(cookieParser());
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));

passport.use(new Strategy(

  (username, password, cb) => {
    // NOTE User / Password confirmation for passportJS login
    // use squelize search for first data entry with username feild match
    Config.findOne({
      where: {
        username: {
          $iLike: `${username}`
        }
      }
    }).then(data => {
      if (!data) {
        return cb(null, false);
      } else if (data.password !== password) {
        return cb(null, false);
      }
      return cb(null, data);
    });
  }

));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, cb) {
  // NOTE?? gets user data from previously defined local strategy, pushes to
  // user parameter. first callback param is error throw?
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {

  Config.findById(id).then(data => {
    if (!data) {
      return cb(null, null);
    }
    cb(null, data);
  });

});

// ----------------------------------------------------------------------
// | Routes Admin Portal |
// ----------------------------------------------------------------------

app.get('/login', (req,res)=>{

  return res.render('login');

});

app.get('/admin', (req,res)=>{

  Config.findOne({
    where: {
      username: {
        $iLike: req.user.username
      }
    }
  }).then(x=>{
    console.log(x.collections);
    return res.render('admin', { collections:x.collections });
  });

});

app.get('/admin/collections/:name', (req,res)=>{

  let galleryName = req.params.name;
  console.log(galleryName);

  Collection.findOne({
    where: {
      name: {
        $iLike: galleryName
      }
    }
  }).then(data => {
    console.log(data.content);
    return res.render('collection', {data:data});
  });

});

app.post('/login', passport.authenticate('local', { failureRedirect: '/login', }), (req,res)=>{

  res.redirect('/admin');

});

// ----------------------------------------------------------------------
// | API Routes |
// ----------------------------------------------------------------------

app.get('/api/collections/:name', (req,res)=>{

  let name = req.params.name;
  Collection.findOne({
    where: {
      name: {
        $iLike: name
      }
    }
  }).then(collection=>{
    let data = collection.dataValues;
    res.json(data);
  });

});

app.get('/api/configs/:user', (req,res)=>{

  let user = req.params.user;
  Config.findOne({
    where: {
      username: {
        $iLike: user
      }
    }
  }).then(config=>{
    let data = config.collections;
    res.json(data);
  });

});

app.listen(PORT, ()=>{
  console.log('server running on port '+PORT);
});
