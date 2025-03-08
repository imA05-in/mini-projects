// search, add, edit, and delete.
let header = document.querySelector(".header")
let input = document.querySelector(".input")
let inputPlaceholder = document.querySelector(".inputPlaceholder")
let enterButton = document.querySelector(".enterButton")
let userValue;
const oList = document.querySelector(".oList")

enterButton.addEventListener("click", function userInputFunc(){
    userValue = inputPlaceholder.value
    pushToList()
    // console.log(userInput)
})

function pushToList(){
    const new_list = document.createElement("li")
    new_list.setAttribute("class", "listItems")
    new_list.innerHTML = userValue
    
    const editButton = document.createElement("button")
    editButton.innerHTML = "e"
    new_list.appendChild(editButton)

    const buttonX = document.createElement("button")
    buttonX.setAttribute("class", "removeButton")
    buttonX.innerHTML = "x"
    new_list.appendChild(buttonX)
    
    oList.appendChild(new_list)
    inputPlaceholder.value = ""

    buttonX.addEventListener("click", function remove(event){
        event.target.parentElement.remove()

    })

    new_list.addEventListener("click", function strike(event){
        if(event.target.classList.contains("strikeTh")){
            event.target.classList.remove("strikeTh")
            // console.log("exe if")
        }
        else{
            event.target.classList.add("strikeTh")
            // console.log("exe else")
        }

    })

    editButton.addEventListener('click', function editIt(){
        const editInput = document.createElement("placeholder")
        new_list.appendChild(editInput)
    })
}

const removeButton = document.querySelector(".removeButton")

removeButton.addEventListener("click", function rem(event){
    event.target.parentElement.remove()
})
