
let todoList = []

renderTodo()

function renderTodo(){
    let todoHTML = ''

    todoList.forEach(function(todoObject,i){
        const {name, dueDate} = todoObject
        const html = `<div class="toDo-list">${name}</div>
        <div class="toDo-list">${dueDate}</div>
        <button class="delete-button js-delete-button">Delete</button>`
        todoHTML += html
    })
    

    document.querySelector('.js-todo-list').innerHTML = todoHTML

    //eventlistener for delete
    document.querySelectorAll('.js-delete-button').forEach((deleteButton,index)=>{
        deleteButton.addEventListener('click',()=>{
            todoList.splice(index,1)
            renderTodo()
        })
    })
}


document.querySelector('.js-add-button').addEventListener('click',()=>{
    addTodo()
})
function addTodo(){
    const inputElement = document.querySelector('.js-todo-input')
    const dateInputElement = document.querySelector('.js-due-date-input')

    const name = inputElement.value
    const dueDate = dateInputElement.value

    todoList.push({name,dueDate})

    inputElement.value = ''
    renderTodo()
}

function handleEnter(event){
    if(event.key === 'Enter'){
        addTodo()
    }
}


    let arrayS = [1,2,3]
    let arrayB = []

    for(let i=0; i<arrayS.length; i++){
        let num = arrayS[i]
        arrayB.push(num*2)
    }

    console.log(arrayB)


    setTimeout(function(){console.log('Time out dickhead'),10000})

    setInterval(function() {
        console.log('Interval has been set')
    }, 10000);

    console.log('Hello dev')