require("./config/database"); // connect this script to the database
const Movie = require("./models/movie");
const Performer = require("./models/performer");
const data = require("./data");

// Movie.deleteMany({})
//   .then((result) => {
//     console.log("deleted movies: ", result);
//     return Performer.deleteMany({});
//   })
//   .then((results) => {
//     console.log("deleted performers: ", results);
//   })
//   .then(() => process.exit());

const p1 = Movie.deleteMany({});
const p2 = Performer.deleteMany({});

Promise.all([p1, p2])
  .then((results) => {
    console.log(results);
    const performerPromise = Performer.create(data.performers);
    const moviePromise = Movie.create(data.movies);
    return Promise.all([performerPromise, moviePromise]);
  })
  .then((results) => {
    console.log(results);
  })
  .then(() => process.exit());
