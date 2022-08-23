 /*-- constants --*/
 const BASE_URL = 'https://sei-puppies-api.herokuapp.com/api/puppies/';

 /*-- cached elements --*/
 const indexViewEl = document.getElementById('index-view');
 const listContainerEl = document.querySelector('#index-view section');
const createViewEl = document.getElementById('create-view');
const inputEls = document.querySelectorAll('#create-view input');

 /*-- app state --*/
let currentView;
let puppies;

 /*-- event listeners --*/
 document.getElementById("create-view-btn").addEventListener('click', function(){
   currentView = "create";
   render();
 })

document.getElementById('index-view-btn')
 .addEventListener('click', init);

 document.getElementById("add-puppy-btn").addEventListener('click', handleAddPuppy)

 /*-- functions --*/
 init();

async function handleAddPuppy(){
  if(inputEls[0].value){
    let response = await fetch(BASE_URL, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        name: inputEls[0].value,
        breed: inputEls[1].value,
        age: inputEls[2].value
      })
    })

    let newPup = response.json();
    alert(`Pup added has an ID of ${newPup._id}`);

    inputEls[0].value = inputEls[1].value = inputEls[2].value = "";
  }
}
 	
 async function init() {
   currentView = 'index';
   const response = await fetch(BASE_URL);
   puppies = await response.json();
   render();
 }
 	
 function render() {
   indexViewEl.style.display = currentView === 'index' ? 'block' : 'none';
   createViewEl.style.display = currentView === 'create' ? 'block' : 'none';
   if(currentView === 'index'){
     let html = puppies.reduce((html, pup) => html + `<div>${pup.name} (${pup.breed}) - age:               ${pup.age} </div>`, "")
     listContainerEl.innerHTML = html;
   } else if (currentView === 'create'){
     // TODO
   }
 }