let db = require('../models/');

function seeds() {

  // seeds for users
  db.user.bulkCreate([
    {
      firstname: 'donna',
      lastname: 'dumdums',
      username: 'dumdums1',
      about: "Have you seen my cat? Always running off, that one!",
      email: 'donna@dumdums.com',
      password: 'password123',
      // last_login:
      status: 'active'
    },
    {
      firstname: 'dwayne',
      lastname: 'dumz',
      username: 'dumzguy',
      about: "Hey you kids keep it down!",
      email: 'dwayne@dumz.come',
      password: 'password123',
      // last_login:
      status: 'active'
    }
  ]);

  // seeds for resources
  db.resource.bulkCreate([
    {
      author_id: 527,
      title: "lawnmower for rent",
      description: "rent any weekend $20 (includes gas)",
      price: 20,
      category: "item offered",
      condition: "good"
    }, {
      author_id: 4421,
      title: "celebration cakes",
      description: "I make great event cakes starting at $30.",
      price: 30,
      category: "service offered",
      condition: "excellent"
    }
  ]);

  // seeds for events
  db.event.bulkCreate([
    {
      author_id: 527,
      title: "yard sale",
      description: "everybody get out any items you wish to sell",
      category: "Sell",
      date: "07/15/2018",
      location: "Lot 115"
    }, {
      author_id: 4421,
      title: "block party",
      description: "party it up with the block!",
      category: "Social",
      date: "07/24/2018",
      location: "Seasame Street Cul-de-sac"
    }, {
      author_id: 527,
      title: "cookout",
      description: "hamburgers and hotdogs on da grill!",
      category: "Social",
      date: "08/10/2018",
      location: "Neighboorhood Cabana"
    }, {
      author_id: 123,
      title: "pool party",
      description: "get the floaties out!",
      category: "Social",
      date: "08/13/2018",
      location: "Clubhouse/Pool"
    }, {
      author_id: 321,
      title: "block party",
      description: "its gonna be wild!",
      category: "Social",
      date: "09/25/2018",
      location: "Seasame Street Cul-de-sac"
    }, {
      author_id: 555,
      title: "volleyball tournament",
      description: "serve it up!",
      category: "Sports",
      date: "09/25/2018",
      location: "Pool-side beach volleyball court"
    }
  ]);

}
// commenting this out as we are invoking it on server.js
// seeds();

module.exports = seeds;
