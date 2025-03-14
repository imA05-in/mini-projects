const clearButton = document.querySelector("#r5b2")
clearButton.addEventListener("click", function(){
    result = output2.innerHTML = ""
    console.log("cleared")
})


const output2 = document.querySelector(".output2")

let result;

function getUserInput(event){
    
    let value = event.target.tagName
    if( value === "BUTTON"){
        value = event.target.value
        console.log(value)

        let oldVal = output2.innerHTML
        result = output2.innerHTML = oldVal+value
        return value
    }  
}

const buttonbox3 = document.querySelector(".buttonbox3")
buttonbox3.addEventListener("click", getUserInput)

const enterButton = document.querySelector("#r5b1")
enterButton.addEventListener("click", function(){
    output2.innerHTML = eval(result)
    console.log()
})