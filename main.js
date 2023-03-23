const myFirstPromise = new Promise((resolve, reject) => {
  const number = 10;
  resolve(number * 100);

  reject("Whoops");
});

const mySecondPromise = new Promise((resolve, reject) => {
  const number = 10;
  resolve(number * 1000);

  reject("Whoops");
});

myFirstPromise
  .then((result) => {
    console.log("My Result", result);
  })
  .catch((error) => {
    console.log("ERROR OCCURED: ", error);
  })
  .finally(() => {
    console.log("FINALLY, I'm done with your shady promises");
  });

// This will wait for all of the promises to be executed
Promise.all([myFirstPromise, mySecondPromise]).then((results) => {
  // We get an array of all of the resolved responses
  console.log(results);
});

console.log("Hello");

// Address of the API
const API_URL = "https://api.chucknorris.io/jokes/random";

let pikachuData = null;

console.log("pikachuData", pikachuData);

// Running the fetch method
fetch(API_URL)
  .then((response) => {
    return response.json();
  })
  .then((results) => {
    console.log("PIKACHU Data: ", results);

    pikachuData = results;

    updatePokemonData();
  });

console.log("pikachuData after promises", pikachuData);

function updatePokemonData() {
  console.log(pikachuData.value);
}

// console.log(fetch(API_URL));

// const form = document.querySelector(".form1");
// const todoTextFromForm = document.querySelector("#todo-item");

// const todoList = document.querySelector(".todolist1");
// // const todos = ["chips"];

// const todos = [];

// const doneTodos = [];

// function drawToDoList() {
//   // Clear all of the entries in the list
//   while (todoList.firstChild) {
//     todoList.removeChild(todoList.firstChild);
//   }

//   for (let i = 0; i < todos.length; i++) {
//     const listItem = document.createElement("li");
//     listItem.textContent = todos[i].text;

//     if (todos[i].isDone === true) {
//       listItem.classList.add("done");
//     }

//     const todoDeleteButton = document.createElement("button");
//     todoDeleteButton.textContent = "Delete";
//     todoDeleteButton.classList.add("todoDeleteButton");

//     todoDeleteButton.dataset.index = i;

//     todoDeleteButton.addEventListener("click", deleteTodo);

//     const todoDoneButton = document.createElement("button");

//     if (todos[i].isDone === true) {
//       todoDoneButton.textContent = "UnDone";
//     } else {
//       todoDoneButton.textContent = "Done";
//     }

//     todoDoneButton.dataset.index = i;

//     todoDoneButton.addEventListener("click", doneTodo);

//     listItem.appendChild(todoDoneButton);
//     listItem.appendChild(todoDeleteButton);

//     todoList.appendChild(listItem);
//   }
// }

// function doneTodo(event) {
//   console.log("Marked as done");

//   todoDeleteIndex = event.target.dataset.index;

//   console.log("INDEX: ", todoDeleteIndex);

//   todos[todoDeleteIndex].isDone = !todos[todoDeleteIndex].isDone;

//   console.log(todos);

//   drawToDoList();
// }

// function deleteTodo(event) {
//   console.log("Delete button index", event.target.dataset.index);

//   todoDeleteIndex = event.target.dataset.index;

//   todos.splice(todoDeleteIndex, 1);

//   drawToDoList();
// }

// function addTodo(event) {
//   event.preventDefault();

//   todoTextFromForm.value;

//   // todos.push(todoTextFromForm.value);

//   todos.push({
//     text: todoTextFromForm.value,
//     isDone: false,
//   });

//   console.log(todos);

//   form.reset();

//   drawToDoList();
// }

// form.addEventListener("submit", addTodo);

// //  You may remove the code below - it's just boilerplate
// //

// //
// // Variables
// //

// // Constants

// // const appID = "app";
// // const headingText = "YET ANOTHER CHANGE. FROM MY MACHINE. To do. To done. ✅";

// // // Variables

// // // DOM Elements
// // let appContainer = document.getElementById(appID);

// // //
// // // Functions
// // //

// // // Add a heading to the app container
// // function inititialise() {
// //   // If anything is wrong with the app container then end
// //   if (!appContainer) {
// //     console.error("Error: Could not find app contianer");
// //     return;
// //   }

// //   // Create an h1 and add it to our app
// //   const h1 = document.createElement("h1");
// //   h1.innerText = headingText;
// //   appContainer.appendChild(h1);

// //   // Init complete
// //   console.log("App successfully initialised");
// // }

// // //
// // // Inits & Event Listeners
// // //

// // inititialise();
