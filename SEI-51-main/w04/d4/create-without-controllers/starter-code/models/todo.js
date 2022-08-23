const todos = [
    {id: "125223", todo: 'Feed Dogs', done: true},
    {id: "127904", todo: 'Learn Express', done: false},
    {id: "139608", todo: 'Buy Milk', done: false}
];

function getAll() {
    return todos;
}
function getOne(requestedProductID) {
    // Use a loop to search the todos array to see if we have the productID that our client is requesting
    for (let item of todos) {
       if (item.id == requestedProductID) { // product exists in our database!
          return item
       }
    }
    // okay so we looped through the entire thing and found nothing
    return null;
}

module.exports = {
    getAll,
    getOne,
};
