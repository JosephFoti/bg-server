const Collection = sequelize.define('collection', {

  name: Sequelize.STRING(10000),
  content: Sequelize.JSON

});

const collage = [{
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
]

const comicConcept = [{
    "id": "comic-concepts1",
    "src": "comic-concepts1.jpg",
    "title": "Birdie",
    "info": "Multimedia on Paper, Available for Purchase",
    "year": "2015"
  },

  {
    "id": "comic-concepts2",
    "src": "comic-concepts2.jpg",
    "title": "Castle of the Overseers",
    "info": "Multimedia on Paper, Not For Sale",
    "year": "2015"
  },

  {
    "id": "comic-concepts3",
    "src": "comic-concepts3.jpg",
    "title": "The Investigator",
    "info": "Multimedia on Paper, Available for Purchase",
    "year": "2015"
  },

  {
    "id": "comic-concepts4",
    "src": "comic-concepts4.jpg",
    "title": "Tribute to Robbie Basho",
    "info": "Multimedia on Paper, Available for Purchase",
    "year": "2015"
  },

  {
    "id": "comic-concepts5",
    "src": "comic-concepts5.jpg",
    "title": "His Apeliness",
    "info": "Multimedia on Silk, Best Offer",
    "year": "2015"
  },

  {
    "id": "comic-concepts6",
    "src": "comic-concepts6.jpg",
    "title": "Dogmen",
    "info": "Multimedia on Paper, Not For Sale",
    "year": "2015"
  },

  {
    "id": "comic-concepts7",
    "src": "comic-concepts7.jpg",
    "title": "Thinking of a Friend",
    "info": "Multimedia on Canvas, nfs",
    "year": "2015"
  },

  {
    "id": "comic-concepts8",
    "src": "comic-concepts8.jpg",
    "title": "Language Torch",
    "info": "Multimedia on Canvas, nfs",
    "year": "2015"
  },

  {
    "id": "comic-concepts9",
    "src": "comic-concepts9.jpg",
    "title": "Little People Concept",
    "info": "Multimedia on Canvas, Not For Sale",
    "year": "2015"
  },

  {
    "id": "comic-concepts10",
    "src": "comic-concepts10.jpg",
    "title": "King Kehmek",
    "info": "Multimedia on Paper, Available for Purchase",
    "year": "2015"
  },

  {
    "id": "comic-concepts11",
    "src": "comic-concepts11.jpg",
    "title": "Camouflage",
    "info": "Multimedia on Canvas, Privately Owned",
    "year": "2014"
  },

  {
    "id": "comic-concepts12",
    "src": "comic-concepts12.jpg",
    "title": "The Tinkerer's Wife",
    "info": "Multimedia on Canvas, Privately Owned",
    "year": "2014"
  },

  {
    "id": "comic-concepts13",
    "src": "comic-concepts13.jpg",
    "title": "The Recruit",
    "info": "Multimedia on Canvas, Privately Owned",
    "year": "2014"
  },

  {
    "id": "comic-concepts14",
    "src": "comic-concepts14.jpg",
    "title": "The Maiden",
    "info": "Multimedia on Canvas, Privately Owned",
    "year": "2014"
  },

  {
    "id": "comic-concepts15",
    "src": "comic-concepts15.jpg",
    "title": "The Capitalist",
    "info": "Multimedia on Canvas, Privately Owned",
    "year": "2014"
  },

  {
    "id": "comic-concepts16",
    "src": "comic-concepts16.jpg",
    "title": "The Rogue",
    "info": "Multimedia on Canvas, Privately Owned",
    "year": "2014"
  },

  {
    "id": "comic-concepts17",
    "src": "comic-concepts17.jpg",
    "title": "Thinks I've Thunk",
    "info": "Multimedia on Canvas, destroyed",
    "year": "2014"
  },

  {
    "id": "comic-concepts18",
    "src": "comic-concepts18.jpg",
    "title": "Masks and Metaphor",
    "info": "Multimedia on Canvas, destroyed",
    "year": "2014"
  },

  {
    "id": "comic-concepts19",
    "src": "comic-concepts19.jpg",
    "title": "Untitled",
    "info": "Multimedia on Canvas, destroyed",
    "year": "2014"
  },

  {
    "id": "comic-concepts20",
    "src": "comic-concepts20.jpg",
    "title": "JayTae 3.0",
    "info": "Multimedia on Paper, Privately Owned",
    "year": "2015"
  },

  {
    "id": "comic-concepts21",
    "src": "comic-concepts21.jpg",
    "title": "Cool Shades",
    "info": "Multimedia on Canvas, Privately Owned",
    "year": "2014"
  },

  {
    "id": "comic-concepts22",
    "src": "comic-concepts22.jpg",
    "title": "The Incinerator",
    "info": "Multimedia on Canvas, Privately Owned",
    "year": "2014"
  },

  {
    "id": "comic-concepts23",
    "src": "comic-concepts23.jpg",
    "title": "Cut-Off",
    "info": "Multimedia on Paper, Privately Owned",
    "year": "2014"
  },

  {
    "id": "comic-concepts24",
    "src": "comic-concepts24.jpg",
    "title": "Mr. White's Three Bright Ideas",
    "info": "Multimedia on Canvas, Privately Owned",
    "year": "2014"
  },

  {
    "id": "comic-concepts25",
    "src": "comic-concepts25.jpg",
    "title": "Faces From the Screen",
    "info": "Multimedia on Paper, Privately Owned, Featured in Market Gallery Group Exhibition on Identity",
    "year": "2015"
  },

  {
    "id": "comic-concepts26",
    "src": "comic-concepts26.jpg",
    "title": "Sarah",
    "info": "Multimedia on Paper, Privately Owned",
    "year": "2014"
  },

  {
    "id": "comic-concepts27",
    "src": "comic-concepts27.jpg",
    "title": "Damn... Out of Space Booze",
    "info": "Multimedia on Paper, Available for Purchase",
    "year": "2014"
  },

  {
    "id": "comic-concepts28",
    "src": "comic-concepts28.jpg",
    "title": "Jaytae 2.0",
    "info": "Multimedia on Canvas, destroyed",
    "year": "2014"
  },

  {
    "id": "comic-concepts29",
    "src": "comic-concepts29.jpg",
    "title": "Untitled",
    "info": "Pen and Paper, destroyed",
    "year": "2014"
  },

  {
    "id": "comic-concepts30",
    "src": "comic-concepts30.jpg",
    "title": "Jaytae 1.0",
    "info": "Multimedia on Canvas, destroyed",
    "year": "2014"
  },

  {
    "id": "comic-concepts31",
    "src": "comic-concepts31.jpg",
    "title": "The Tinkerer",
    "info": "Multimedia on Paper, Privately Owned",
    "year": "2014"
  },

  {
    "id": "comic-concepts32",
    "src": "comic-concepts32.jpg",
    "title": "The Protector",
    "info": "mMultimedia on Canvas, Privately Owned",
    "year": "2014"
  },

  {
    "id": "comic-concepts33",
    "src": "comic-concepts33.jpg",
    "title": "The Scientist",
    "info": "Pen and Paper, Available for Purchase",
    "year": "2015"
  },

  {
    "id": "comic-concepts34",
    "src": "comic-concepts34.jpg",
    "title": "Pink Umbrella Armor",
    "info": "Multimedia on Paper, Privately Owned (I'm not really sure because Keller Williams is a dick)",
    "year": "2015"
  },

  {
    "id": "comic-concepts35",
    "src": "comic-concepts35.jpg",
    "title": "The Ghost",
    "info": "Multimedia on Paper, Privately Owned",
    "year": "2014"
  },

  {
    "id": "comic-concepts36",
    "src": "comic-concepts36.jpg",
    "title": "The Adjudicator",
    "info": "Multimedia on Paper, Privately Owned",
    "year": "2015"
  },

  {
    "id": "comic-concepts37",
    "src": "comic-concepts37.jpg",
    "title": "Jerk",
    "info": "Multimedia on Paper, Privately Owned",
    "year": "2016"
  },

  {
    "id": "comic-concepts38",
    "src": "comic-concepts38.jpg",
    "title": "Burn Victim",
    "info": "Multimedia on Paper, Available for Purchase",
    "year": "2015"
  },

  {
    "id": "comic-concepts39",
    "src": "comic-concepts39.jpg",
    "title": "Brain Thieving Jellyfish",
    "info": "Multimedia on Panel, Privately Owned",
    "year": "2015"
  },

  {
    "id": "comic-concepts40",
    "src": "comic-concepts40.jpg",
    "title": "The Ronin",
    "info": "Multimedia on Panel, Privately owned",
    "year": "2015"
  }
]

const painting = [{
    "id": "painting1",
    "src": "painting1.jpg",
    "title": "Untitled",
    "info": "Acrilic on Canvas, Available for Purchase",
    "year": "2014"
  },

  {
    "id": "painting2",
    "src": "painting2.jpg",
    "title": "Untitled",
    "info": "Acrilic on Canvas, Available for Purchase",
    "year": "2014"
  },

  {
    "id": "painting3",
    "src": "painting3.jpg",
    "title": "Untitled",
    "info": "Acrilic on Canvas, Available for Purchase",
    "year": "2014"
  },

  {
    "id": "painting4",
    "src": "painting4.jpg",
    "title": "Untitled",
    "info": "Acrilic on Canvas, Available for Purchase",
    "year": "2014"
  },

  {
    "id": "painting5",
    "src": "painting5.jpg",
    "title": "Untitled",
    "info": "Acrilic on Canvas, Available for Purchase",
    "year": "2014"
  },

  {
    "id": "painting6",
    "src": "painting6.jpg",
    "title": "Untitled",
    "info": "Acrilic on Canvas, Available for Purchase",
    "year": "2014"
  },

  {
    "id": "painting7",
    "src": "painting7.jpg",
    "title": "Untitled",
    "info": "Acrilic on Canvas, Available for Purchase",
    "year": "2014"
  },

  {
    "id": "painting8",
    "src": "painting8.jpg",
    "title": "Untitled",
    "info": "Acrilic on Canvas, Available for Purchase",
    "year": "2014"
  },

  {
    "id": "painting9",
    "src": "painting9.jpg",
    "title": "After The Rain",
    "info": "Acrilic on Canvas, Available for Purchase",
    "year": "2016"
  },

  {
    "id": "painting10",
    "src": "painting10.jpg",
    "title": "The Mask",
    "info": "Acrilic on Canvas, Available for Purchase",
    "year": "2016"
  },

  {
    "id": "painting11",
    "src": "painting11.jpg",
    "title": "A Typical Florentine Wall",
    "info": "Acrilic on Canvas, Available for Purchase",
    "year": "2015"
  },

  {
    "id": "painting12",
    "src": "painting12.jpg",
    "title": "The Fifth Element",
    "info": "Acrilic on Canvas, Available for Purchase",
    "year": "2014"
  },

  {
    "id": "painting13",
    "src": "painting13.jpg",
    "title": "Untitled",
    "info": "Acrilic on Canvas, Available for Purchase",
    "year": "2015"
  },

  {
    "id": "painting14",
    "src": "painting14.jpg",
    "title": "Untitled",
    "info": "Acrilic on Canvas, Available for Purchase",
    "year": "2015"
  },

  {
    "id": "painting15",
    "src": "painting15.jpg",
    "title": "Busted",
    "info": "Acrilic on Canvas, Available for Purchase",
    "year": "2014"
  }
]

const wordArt = [{
    "id": "word-art1",
    "src": "word-art1.jpg",
    "title": "Big Man",
    "info": "Acrilic On Cavnvas, Available for Purchase",
    "year": "2016"
  },


  {
    "id": "word-art2",
    "src": "word-art2.jpg",
    "title": "Introductions",
    "info": "Acrilic on Canvas, Available for Purchase",
    "year": "2016"
  },


  {
    "id": "word-art3",
    "src": "word-art3.jpg",
    "title": "Convinced",
    "info": "Acrilic on Canvas, Available for Purchase",
    "year": "2016"
  },


  {
    "id": "word-art4",
    "src": "word-art4.jpg",
    "title": "Can't See Eye to Eye",
    "info": "Acrilic on Canvas, Available for Purchase",
    "year": "2016"
  },


  {
    "id": "word-art5",
    "src": "word-art5.jpg",
    "title": "Special Lady",
    "info": "Acrilic on Canvas, Available for Purchase",
    "year": "2016"
  },


  {
    "id": "word-art6",
    "src": "word-art6.jpg",
    "title": "Observed",
    "info": "Acrilic on Canvas, Available for Purchase",
    "year": "2016"
  },


  {
    "id": "word-art7",
    "src": "word-art7.jpg",
    "title": "Red Herring",
    "info": "Acrilic on Canvas, Available for Purchase",
    "year": "2016"
  },


  {
    "id": "word-art8",
    "src": "word-art8.jpg",
    "title": "What To Do When You're Feeling Blue",
    "info": "Acrilic on Canvas, Available for Purchase",
    "year": "2016"
  },


  {
    "id": "word-art9",
    "src": "word-art9.jpg",
    "title": "Wednesdays",
    "info": "Acrilic on Canvas, Privately Owned",
    "year": "2016"
  },


  {
    "id": "word-art10",
    "src": "word-art10.jpg",
    "title": "Someone Is Lying",
    "info": "Acrilic on Canvas, Available for Purchase",
    "year": "2016"
  },


  {
    "id": "word-art11",
    "src": "word-art11.jpg",
    "title": "A Conversation",
    "info": "Acrilic on Canvas, Available for Purchase",
    "year": "2016"
  },


  {
    "id": "word-art12",
    "src": "word-art12.jpg",
    "title": "A Dialogue Between Suitors",
    "info": "Acrilic on Canvas, Privately Owned",
    "year": "2016"
  },


  {
    "id": "word-art13",
    "src": "word-art13.jpg",
    "title": "Someone Is Accusing",
    "info": "Acrilic on Canvas, Available for Purchase",
    "year": "2016"
  },


  {
    "id": "word-art14",
    "src": "word-art14.jpg",
    "title": "An Interjection",
    "info": "Watercolor on Canvas, Available for Purchase",
    "year": "2016"
  },


  {
    "id": "word-art15",
    "src": "word-art15.jpg",
    "title": "A Misunderstanding",
    "info": "Watercolor on Canvas, Privately Owned",
    "year": "2016"
  }
]


Collection.create({

  name: "word-art",
  content: wordArt

})
Collection.create({

  name: "collage",
  content: collage

})
Collection.create({

  name: "painting",
  content: painting

})
Collection.create({

  name: "comic-concepts",
  content: comicConcept

})

sequelize.sync();
