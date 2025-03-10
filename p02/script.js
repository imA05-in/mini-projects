async function fetchpokipoki() {
    try{
        const data = await fetch("https://pokeapi.co/api/v2/pokemon")
    
        if(!data.ok){
            throw new Error("couldnt fetch pokimon")
            
        }

        const response = await data.json()
        return response;
    }
    catch(error){
        console.log("error occured")
    }
}

const fetchButton = document.querySelector("#fetchButton")
const pokemon = document.querySelector("#pokemon")

fetchButton.addEventListener("click",async function display(){
    const pList = await fetchpokipoki()
    
    
    const pName = pList.results[Math.floor(Math.random() *20)].name

    console.log(pName)
    pokemon.innerHTML = pName

})