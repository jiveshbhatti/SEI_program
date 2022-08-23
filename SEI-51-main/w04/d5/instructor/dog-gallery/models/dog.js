const { v4: uuidv4 } = require("uuid");

const dogs = [
  {
    id: uuidv4(),
    name: "Chiquito",
    age: 5,
    description: "He is from Peru",
    img: "https://marvel-b1-cdn.bc0a.com/f00000000052994/www.hillspet.com/content/dam/cp-sites/hills/hills-pet/en_us/exported/dog-care/Skyword/images/azawakh-dog-standing-on-path-SW.jpg",
  },
  {
    id: uuidv4(),
    name: "Darwin",
    age: 11,
    description: "He is a little trouble maker",
    img: "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/dog-grass-441879.jpg?h=a77125df&itok=oA8hUTqS",
  },
];

function getAll() {
  return dogs;
}

function getOne(id) {
  return dogs.find((dog) => dog.id === id);
}

function deleteOne(id) {
  const dogIdx = dogs.findIndex((dog) => dog.id === id);
  if (dogIdx === -1) return false;
  return dogs.splice(dogIdx, 1);
}

function updateOne(id, updatedDog) {
  const currentDog = getOne(id);
  if (!currentDog) return false;
  currentDog.name = updatedDog.name;
  currentDog.age = updatedDog.age;
  currentDog.description = updatedDog.description;
}

function createOne(dog) {
  dog.id = uuidv4();
  dogs.push(dog);
}

module.exports = {
  getAll,
  getOne,
  deleteOne,
  updateOne,
  createOne,
};
