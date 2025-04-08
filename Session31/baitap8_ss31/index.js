let todoList = [
    { id: 1, task: "Hit the gym", completed: false },
    { id: 2, task: "Pay bills", completed: true },
    { id: 3, task: "Meet George", completed: false },
    { id: 4, task: "Buy eggs", completed: false },
    { id: 5, task: "Read a book", completed: false },
    { id: 6, task: "Organize office", completed: false }
];

const ul_myUL = document.getElementById("myUL");
const input_to_do = document.getElementById("myInput");
const btn_add = document.querySelector(".addBtn");

function renderTodoList() {
    ul_myUL.innerHTML = "";

    todoList.forEach(item => {
        let li_myUL = document.createElement("li");

        li_myUL.textContent = item.task;
        
        if(item.completed) {
            li_myUL.classList.add("checked");
        }

        li_myUL.addEventListener('click', () => {
            item.completed = !item.completed;
            renderTodoList();
        });

        let close_btn = document.createElement("span");
        close_btn.textContent = "X";
        close_btn.classList.add("close");

        close_btn.addEventListener('click', () => {
            todoList = todoList.filter(element => element.id != item.id);
            renderTodoList();
        });

        li_myUL.appendChild(close_btn);
        ul_myUL.appendChild(li_myUL);
    })

}

btn_add.addEventListener("click", () => {
    if(input_to_do.value.trim() === "") {
        console.log("Vui lòng nhập dữ liệu!!");
        return;
    }

    let new_todo = {
        id: todoList.length + 1,
        task: input_to_do.value.trim(),
        completed: false
    };

    todoList.push(new_todo);
    input_to_do.value = "";
    renderTodoList();
})

renderTodoList();