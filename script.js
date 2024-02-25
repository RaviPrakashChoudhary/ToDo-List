const TaskToAdd = document.querySelector('.inputText');
const AddBtn = document.querySelector('.add');
const ToDoform = document.querySelector('.ToDoform');
const Tasks = document.querySelector('.tasks');
const deleteTaskbtn = document.querySelector('.delete');
const CheckBox = document.querySelector('CheckBox');





AddBtn.addEventListener('click', (e) => {

    const task = TaskToAdd.value;
    if (task == '') {
        alert('Enter a task')
        saveData()
    } else {
        const task = TaskToAdd.value;
        TaskToAdd.value = "";
        var taskItems = document.createElement('li');
        taskItems.innerHTML = `<input class="CheckBox" type="checkbox"> ${task} <button class="delete">Remove</button>`;

        taskItems.querySelector('.CheckBox ').addEventListener('click', function () {
            this.classList.toggle('done');
        })
        taskItems.addEventListener('click', function () {
            this.classList.toggle('done');
        })
        taskItems.querySelector('.delete').addEventListener('click', function () {
            taskItems.remove();
        })
        Tasks.appendChild(taskItems)
    }
})

function saveData() {
    localStorage.setItem('data00', Tasks.innerHTML);
}

function ShowData() {
    Tasks.innerHTML = localStorage.getItem('data00')
} ShowData();
