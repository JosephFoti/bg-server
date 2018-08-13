const express = require('express');
const Sequelize = require('sequelize');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();

const PORT = 5000 || process.env.PORT
const result = dotenv.config();

const Op = Sequelize.Op

app.use(cors());

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
  collections: Sequelize.STRING(10000)

});

const Collection = sequelize.define('collection', {

  name: Sequelize.STRING(10000),
  content: Sequelize.JSON

});

const collage = [
  {
    "id": "collage1",
    "src": "collage1.jpg",
    "title": "Split In Two",
    "sale": "Not For Sale",
    "year": "2016"
  },

  {
    "id": "collage2",
    "src": "collage2.jpg",
    "title": "Mathmatical",
    "sale": "Not For Sale",
    "year": "2016"
  },

  {
    "id": "collage3",
    "src": "collage3.jpg",
    "title": "When You Can't Be Yourself there is Too Much to Be",
    "sale": "Not For Sale",
    "year": "2016"
  },

  {
    "id": "collage4",
    "src": "collage4.jpg",
    "title": "Underwater",
    "sale": "Not For Sale",
    "year": "2016"
  },

  {
    "id": "collage5",
    "src": "collage5.jpg",
    "title": "I Tried to Speak to a Tree, But it Knew More Colors than Me",
    "sale": "Not For Sale",
    "year": "2016"
  },

  {
    "id": "collage6",
    "src": "collage6.jpg",
    "title": "untitled",
    "sale": "Not For Sale",
    "year": "2016"
  },

  {
    "id": "collage7",
    "src": "collage7.jpg",
    "title": "untitled",
    "sale": "Not For Sale",
    "year": "2016"
  },

  {
    "id": "collage8",
    "src": "collage8.jpg",
    "title": "untitled",
    "sale": "Not For Sale",
    "year": "2016"
  },

  {
    "id": "collage9",
    "src": "collage9.jpg",
    "title": "untitled",
    "sale": "Not For Sale",
    "year": "2016"
  }
];

// Collection.create({
//
//   name: "collage",
//   content: collage
//
// })

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

app.get('/api/test', (req,res)=>{

  const testData = [
    {id:1,text:'item 1'},
    {id:2,text:'item 2'},
    {id:3,text:'item 3'},
  ];

  res.json(testData);

});

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

app.listen(PORT, ()=>{
  console.log('server running on port '+PORT);
});
