const addref = document.querySelector('.action-wrapper .add');
const removeRef = document.querySelector('.action-wrapper .delete');
const modelRef = document.querySelector('.modal');
const textareaRef = document.querySelector('.modal .left-section textarea');
const taskWrapperRef = document.querySelector('.tasks-wrapper .task');
const rightQuerySelection = document.querySelectorAll('.modal .right-section .category');
const taskListDeleteRef = document.querySelectorAll('.task-wrapper .task .task-delete-icon');
const headerCategoryFilterWrapper = document.querySelector('header .category-wrapper');


// to hide & show textarea on button click
addref.addEventListener('click', function(e){
   toggleModal();
});

// to add default selection of category
function defaultCategorySelection(){
    removeAllCategorySelection();
    const firstCategory = document.querySelector('.right-section .category.p1');
    firstCategory.classList.add('selected');
}

function toggleModal(){
    const isHidden = modelRef.classList.contains('hide');
    if(isHidden){
        modelRef.classList.remove('hide');
    }
    else{
        defaultCategorySelection();
        modelRef.classList.add('hide');
    }
}

const tasks = JSON.parse(localStorage.getItem('tasks') || []);

function renderTaskList(){
    tasks.forEach((task) => {
        createTask(task);
    })
}

function addTasksInData(newTask){
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// if we press 'enter' key, it should save a task
textareaRef.addEventListener('keydown', function(e){
    if(e.key == "Enter"){
        const rightSelectedCategory = document.querySelector('.right-section .category.selected');
        const selectedCategoryName = rightSelectedCategory.getAttribute('data-category'); 
        console.log(e.target.value); // to show written data on textarea

        const newTask = {
            id: Math.random(),
            title: e.target.value,
            category: selectedCategoryName,
        };

        addTasksInData();
     // add new tasks into task array

        e.target.value = " "; // to empty the textarea
        toggleModal(); // after pressing enter, the data saved & textarea will be hidden
        createTask(newTask);
    }
});

// to create a task element or box
function createTask(task){
    const taskRef = document.createElement('div');
    taskRef.className = 'task';
    taskRef.setAttribute('data-id', task.id);
    // taskRef.dataset
    taskRef.innerHTML = `
            <div class="task-category ${task.category}" data-priority="${task.category}"></div>
            <div class="task-id">${task.id}</div>
            <div class="task-title"><textarea>${task.title}</textarea></div>
            <div class="task-delete-icon"><i class="fa fa-trash"></i></div>
    `;
    // to create more task box
    taskWrapperRef.appendChild(taskRef);

    // const deleteIconRef = taskRef.querySelector('.task-delete-icon .fa-trash');
    // deleteIconRef.addEventListener('click', function(e){
    //     const selectedTask = e.target.closest('.task');
    //     selectedTask.remove();
    //     deleteTaskFromData();
    // });
}


// to highlight selected box of category
//console.log(rightQuerySelection);

rightQuerySelection.forEach(function(categoryRef){
    categoryRef.addEventListener('click', function(e){
        console.log(e.target);
        removeAllCategorySelection(); // will remove first all selection
        e.target.classList.add("selected"); // then add, "selected" class to target category
    })
})

    function removeAllCategorySelection(){
        rightQuerySelection.forEach(function(categoryRef){
            categoryRef.classList.remove('selected');
        })
    }



function deleteTaskFromData(taskID){
    const selectedTaskIdx = tasks.findIndex((task) => Number(task.id) === Number(taskId));
    tasks.splice(selectedTaskIdx, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


taskWrapperRef.addEventListener('click', function(e){
    console.log(e.target.classList.contains('fa-trash'));
    if(e.target.classList.contains('fa-trash')){
        const currentTaskRef = e.target.closest('.task');
        currentTaskRef.remove();
        const taskId = currentTaskRef.dataset.id; 
        deleteTaskFromData(taskId); 
    }

    if(e.target.classList.contains('task-category')){
        const currentPriority = e.target.dataset.priority;
        const nextPriority = getNextPriority(currentPriority);
        e.target.dataset.priority = nextPriority;
        const taskId = Number(e.target.closest('.task').dataset.id);
        updatePriorityInData(taskId, nextPriority);
    }
})

function updatePriorityInData(taskId, nextPriority){
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    tasks[taskIndex].category = nextPriority;
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


function getNextPriority(currentPriority){
    const priorityList = ['p1', 'p2', 'p3', 'p4'];
    const currentPriorityIdx = priorityList.findIndex((p) => p === currentPriority)

    const nextPriorityIdx = (currentPriorityIdx + 1) % 4;
    return priorityList[nextPriorityIdx];
}



// to filter out task on basis of color we selects from header
headerCategoryFilterWrapper.addEventListener('click', function(e){
    if(e.target.classList.contains('category')){
        const selectedPriority = e.target.dataset.priority;

        const taskListRef = document.querySelectorAll('.task');
        taskListRef.forEach(taskRef => {
            taskRef.classList.remove('hide');
            const currentTaskPriority = taskRef.querySelector('.task-category').dataset.priority;
            if(currentTaskPriority != selectedPriority){
                taskRef.classList.add('hide');
            }
        })
    }
})

// to make delete symbol red for hide or show delete icon in box
removeRef.addEventListener('click', function(e){
    const isDeleteEnabled = e.target.classList.contains('enabled');
    if(isDeleteEnabled){
        e.target.classList.remove('enabled');
        //toggleDeleteIcon(false);
        taskWrapperRef.dataset.deleteDisabled = true;
    }
    else{
        e.target.classList.add('enabled');
        //toggleDeleteIcon(true);
        taskWrapperRef.dataset.deleteDisabled = false;
    }
})

function toggleDeleteIcon(visible){
    const allDeleteRef = document.querySelectorAll('.task-delete-icon');
    allDeleteRef.forEach(deleteIconRef => {
        deleteIconRef.style.display = visible? "block" : "none";
    })
}