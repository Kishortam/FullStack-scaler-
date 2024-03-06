
const todosList = [
    {
        "id": 1,
        "todo": "Do something nice for someone I care about",
        "completed": true,
        "userId": 26
    },
    {
        "id": 2,
        "todo": "Memorize the fifty states and their capitals",
        "completed": false,
        "userId": 48
    },
    {
        "id": 3,
        "todo": "Watch a classic movie",
        "completed": false,
        "userId": 4
    },
    {
        "id": 4,
        "todo": "Contribute code or a monetary donation to an open-source software project",
        "completed": false,
        "userId": 48
    }
];





// taking reference of ul
const ulListRef = document.querySelector('.todo-list');

// create a list and add a text
function createATodoRef(text){
    const liRef = document.createElement('li');
    liRef.innerText = text;
    return liRef;
}

// create li for each todo
function renderList(todoList){
    todoList.forEach(item => {
        // console.log(item.todo); // to see on console
        const newLi = createATodoRef(item.todo);
        // add newly created todo li to ul => append
        ulListRef.appendChild(newLi);
    })
}

//renderLiList(todosList);  // hard coded data 



function fetchTodos(){
    fetch("https://dummyjson.com/todos")
    .then(res => res.json())
    .then(data => renderList(data.todos))
    .catch(e => console.log(e));
}

fetchTodos();

