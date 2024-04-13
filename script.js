// fetching required elements
const taskInput = document.querySelector(".task-input input");
const taskBox = document.querySelector(".task-box");


// add listener to inputbox
taskInput.addEventListener('keyup', (e)=>{

    if(e.key === 'Enter'){
        if(e.target.value === '')
            alert("You must write something..!");
        else{
            let li = document.createElement('li');
            let p = document.createElement('p');
            let title = e.target.value;
            li.className = 'task';
            let span = document.createElement('span');
            span.innerHTML = '\u00d7';
            p.innerHTML = title.length > 25 ? title.substring(0, 25) : title;
            li.appendChild(p);
            li.appendChild(span);
            taskBox.appendChild(li);
            saveTask();
        }
        e.target.value = '';
    }

});


// adding listener to task
taskBox.addEventListener('click', (e)=>{

    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveTask();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveTask();
    }

});


// clearAll listener function
function clearAll(){
    localStorage.setItem('todos', '');
    showTask();
}


// save all todos on local storage
function saveTask(){
    localStorage.setItem('todos', taskBox.innerHTML);
}


// showing todos from local storage
function showTask(){
    taskBox.innerHTML = localStorage.getItem('todos');
}
showTask();

