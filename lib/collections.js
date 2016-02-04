Books = new Mongo.Collection("books");

if(Meteor.isServer) {
  Books.remove({});

  Books.insert({
    "category": {
      "_id": 2,
      "name": "Fiction",
      "color": "#2980b9"
    },
    "title": "CRASH DIET",
    "author": {
      "_id": 7,
      "name": "Jill McCorkle"
    },
    "cover": "http://www.workman.com/is/pgrow/products/covers/9781616201999.jpg",
    "chapters": [
      {
        "title": "The jungle",
        "keywords": [
          "habitats",
          "biodiversity",
          "plants",
          "topography"
        ]
      }, {
        "title": "Predators and prays",
        "keywords": [
          "insects",
          "reptiles",
          "mammals",
          "birds",
          "aquatic animals"
        ]
      }, {
        "title": "Sensory",
        "keywords": [
          "ecolocation",
          "infrared vision",
          "electrical sense",
          "magnetic sense"
        ]
      }, {
        "title": "The trap",
        "keywords": [
          "venom",
          "webs",
          "claws",
          "teeth",
          "group hunt",
          "beaks",
          "speed"
        ]
      }
    ]
  });

  Books.insert({
    "category": {
      "_id": 4,
      "name": "Humor",
      "color": "#d35400"
    },
    "title": "BAD DOG",
    "author": {
      "_id": 7,
      "name": "Rob Battles"
    },
    "cover": "http://www.workman.com/is/pgrow/products/covers/9780761139836.jpg",
    "chapters": [
      {
        "title": "The jungle",
        "keywords": [
          "habitats",
          "biodiversity",
          "plants",
          "topography"
        ]
      }, {
        "title": "Predators and prays",
        "keywords": [
          "insects",
          "reptiles",
          "mammals",
          "birds",
          "aquatic animals"
        ]
      }, {
        "title": "Sensory",
        "keywords": [
          "ecolocation",
          "infrared vision",
          "electrical sense",
          "magnetic sense"
        ]
      }, {
        "title": "The trap",
        "keywords": [
          "venom",
          "webs",
          "claws",
          "teeth",
          "group hunt",
          "beaks",
          "speed"
        ]
      }
    ]
  });



  Books.insert({
    "category": {
      "_id": 1,
      "name": "Nature",
      "color": "#16a085"
    },
    "title": "Night Hunters",
    "author": {
      "_id": 7,
      "name": "Peter Bullet"
    },
    "cover": "http://i.harperapps.com/covers/9780062343383/y450-293.png",
    "chapters": [
      {
        "title": "The jungle",
        "keywords": [
          "habitats",
          "biodiversity",
          "plants",
          "topography"
        ]
      }, {
        "title": "Predators and prays",
        "keywords": [
          "insects",
          "reptiles",
          "mammals",
          "birds",
          "aquatic animals"
        ]
      }, {
        "title": "Sensory",
        "keywords": [
          "ecolocation",
          "infrared vision",
          "electrical sense",
          "magnetic sense"
        ]
      }, {
        "title": "The trap",
        "keywords": [
          "venom",
          "webs",
          "claws",
          "teeth",
          "group hunt",
          "beaks",
          "speed"
        ]
      }
    ]
  });


  Books.insert({
    "category": {
      "_id": 3,
      "name": "History",
      "color": "#7f8c8d"
    },
    "title": "AMATEURS, TO ARMS!",
    "author": {
      "_id": 7,
      "name": "John R. Elting"
    },
    "cover": "http://www.workman.com/is/pgrow/products/covers/9781616202866.jpg",
    "chapters": [
      {
        "title": "The jungle",
        "keywords": [
          "habitats",
          "biodiversity",
          "plants",
          "topography"
        ]
      }, {
        "title": "Predators and prays",
        "keywords": [
          "insects",
          "reptiles",
          "mammals",
          "birds",
          "aquatic animals"
        ]
      }, {
        "title": "Sensory",
        "keywords": [
          "ecolocation",
          "infrared vision",
          "electrical sense",
          "magnetic sense"
        ]
      }, {
        "title": "The trap",
        "keywords": [
          "venom",
          "webs",
          "claws",
          "teeth",
          "group hunt",
          "beaks",
          "speed"
        ]
      }
    ]
  });

  Books.insert({
    "category": {
      "_id": 2,
      "name": "Fiction",
      "color": "#2980b9"
    },
    "title": "ACTS OF GOD",
    "author": {
      "_id": 7,
      "name": "Ellen Gilchrist"
    },
    "cover": "http://www.workman.com/is/pgrow/products/covers/9781616205720.jpg",
    "chapters": [
      {
        "title": "The jungle",
        "keywords": [
          "habitats",
          "biodiversity",
          "plants",
          "topography"
        ]
      }, {
        "title": "Predators and prays",
        "keywords": [
          "insects",
          "reptiles",
          "mammals",
          "birds",
          "aquatic animals"
        ]
      }, {
        "title": "Sensory",
        "keywords": [
          "ecolocation",
          "infrared vision",
          "electrical sense",
          "magnetic sense"
        ]
      }, {
        "title": "The trap",
        "keywords": [
          "venom",
          "webs",
          "claws",
          "teeth",
          "group hunt",
          "beaks",
          "speed"
        ]
      }
    ]
  });


  Books.insert({
    "category": {
      "_id": 4,
      "name": "Travel",
      "color": "#8e44ad"
    },
    "title": "MUSHROOMS OF THE ROCKY MOUNTAIN REGION",
    "author": {
      "_id": 7,
      "name": "Vera Stucky Evenson"
    },
    "cover": "http://www.workman.com/is/pgrow/products/covers/9781604695762.jpg",
    "chapters": [
      {
        "title": "The jungle",
        "keywords": [
          "habitats",
          "biodiversity",
          "plants",
          "topography"
        ]
      }, {
        "title": "Predators and prays",
        "keywords": [
          "insects",
          "reptiles",
          "mammals",
          "birds",
          "aquatic animals"
        ]
      }, {
        "title": "Sensory",
        "keywords": [
          "ecolocation",
          "infrared vision",
          "electrical sense",
          "magnetic sense"
        ]
      }, {
        "title": "The trap",
        "keywords": [
          "venom",
          "webs",
          "claws",
          "teeth",
          "group hunt",
          "beaks",
          "speed"
        ]
      }
    ]
  });


  Books.insert({
    "category": {
      "_id": 1,
      "name": "Nature",
      "color": "#16a085"
    },
    "title": "97 WAYS TO MAKE A CAT LIKE YOU",
    "author": {
      "_id": 7,
      "name": "Carol Kaufmann"
    },
    "cover": "http://www.workman.com/is/pgrow/products/covers/9780761182160.jpg",
    "chapters": [
      {
        "title": "The jungle",
        "keywords": [
          "habitats",
          "biodiversity",
          "plants",
          "topography"
        ]
      }, {
        "title": "Predators and prays",
        "keywords": [
          "insects",
          "reptiles",
          "mammals",
          "birds",
          "aquatic animals"
        ]
      }, {
        "title": "Sensory",
        "keywords": [
          "ecolocation",
          "infrared vision",
          "electrical sense",
          "magnetic sense"
        ]
      }, {
        "title": "The trap",
        "keywords": [
          "venom",
          "webs",
          "claws",
          "teeth",
          "group hunt",
          "beaks",
          "speed"
        ]
      }
    ]
  });


  Books.insert({
    "category": {
      "_id": 3,
      "name": "History",
      "color": "#7f8c8d"
    },
    "title": "MEDAL OF HONOR",
    "author": {
      "_id": 7,
      "name": "Peter Collier"
    },
    "cover": "http://www.workman.com/is/pgrow/products/covers/9781579654665.jpg",
    "chapters": [
      {
        "title": "The jungle",
        "keywords": [
          "habitats",
          "biodiversity",
          "plants",
          "topography"
        ]
      }, {
        "title": "Predators and prays",
        "keywords": [
          "insects",
          "reptiles",
          "mammals",
          "birds",
          "aquatic animals"
        ]
      }, {
        "title": "Sensory",
        "keywords": [
          "ecolocation",
          "infrared vision",
          "electrical sense",
          "magnetic sense"
        ]
      }, {
        "title": "The trap",
        "keywords": [
          "venom",
          "webs",
          "claws",
          "teeth",
          "group hunt",
          "beaks",
          "speed"
        ]
      }
    ]
  });


  Books.insert({
    "category": {
      "_id": 4,
      "name": "Humor",
      "color": "#d35400"
    },
    "title": "AGE DOESN'T MATTER UNLESS YOU'RE A CHEESE",
    "author": {
      "_id": 7,
      "name": "Kathryn Petras"
    },
    "cover": "http://www.workman.com/is/pgrow/products/covers/9780761125181.jpg",
    "chapters": [
      {
        "title": "The jungle",
        "keywords": [
          "habitats",
          "biodiversity",
          "plants",
          "topography"
        ]
      }, {
        "title": "Predators and prays",
        "keywords": [
          "insects",
          "reptiles",
          "mammals",
          "birds",
          "aquatic animals"
        ]
      }, {
        "title": "Sensory",
        "keywords": [
          "ecolocation",
          "infrared vision",
          "electrical sense",
          "magnetic sense"
        ]
      }, {
        "title": "The trap",
        "keywords": [
          "venom",
          "webs",
          "claws",
          "teeth",
          "group hunt",
          "beaks",
          "speed"
        ]
      }
    ]
  });



  Books.insert({
    "category": {
      "_id": 4,
      "name": "Travel",
      "color": "#8e44ad"
    },
    "title": "1,000 PLACES TO SEE BEFORE YOU DIE, THE SECOND EDITION",
    "author": {
      "_id": 7,
      "name": "Patricia Schultz"
    },
    "cover": "http://www.workman.com/is/pgrow/products/covers/9780761168713.jpg",
    "chapters": [
      {
        "title": "The jungle",
        "keywords": [
          "habitats",
          "biodiversity",
          "plants",
          "topography"
        ]
      }, {
        "title": "Predators and prays",
        "keywords": [
          "insects",
          "reptiles",
          "mammals",
          "birds",
          "aquatic animals"
        ]
      }, {
        "title": "Sensory",
        "keywords": [
          "ecolocation",
          "infrared vision",
          "electrical sense",
          "magnetic sense"
        ]
      }, {
        "title": "The trap",
        "keywords": [
          "venom",
          "webs",
          "claws",
          "teeth",
          "group hunt",
          "beaks",
          "speed"
        ]
      }
    ]
  });


  Books.insert({
    "category": {
      "_id": 2,
      "name": "Fiction",
      "color": "#2980b9"
    },
    "title": "THE BEACH AT GALLE ROAD",
    "author": {
      "_id": 7,
      "name": "Joanna Luloff"
    },
    "cover": "http://www.workman.com/is/pgrow/products/covers/9781565129214.jpg",
    "chapters": [
      {
        "title": "The jungle",
        "keywords": [
          "habitats",
          "biodiversity",
          "plants",
          "topography"
        ]
      }, {
        "title": "Predators and prays",
        "keywords": [
          "insects",
          "reptiles",
          "mammals",
          "birds",
          "aquatic animals"
        ]
      }, {
        "title": "Sensory",
        "keywords": [
          "ecolocation",
          "infrared vision",
          "electrical sense",
          "magnetic sense"
        ]
      }, {
        "title": "The trap",
        "keywords": [
          "venom",
          "webs",
          "claws",
          "teeth",
          "group hunt",
          "beaks",
          "speed"
        ]
      }
    ]
  });


  Books.insert({
    "category": {
      "_id": 4,
      "name": "Humor",
      "color": "#d35400"
    },
    "title": "99 PROBLEMS",
    "author": {
      "_id": 7,
      "name": "Ali Graham"
    },
    "cover": "http://www.workman.com/is/pgrow/products/covers/9780761182153.jpg",
    "chapters": [
      {
        "title": "The jungle",
        "keywords": [
          "habitats",
          "biodiversity",
          "plants",
          "topography"
        ]
      }, {
        "title": "Predators and prays",
        "keywords": [
          "insects",
          "reptiles",
          "mammals",
          "birds",
          "aquatic animals"
        ]
      }, {
        "title": "Sensory",
        "keywords": [
          "ecolocation",
          "infrared vision",
          "electrical sense",
          "magnetic sense"
        ]
      }, {
        "title": "The trap",
        "keywords": [
          "venom",
          "webs",
          "claws",
          "teeth",
          "group hunt",
          "beaks",
          "speed"
        ]
      }
    ]
  });
}
