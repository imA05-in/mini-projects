// pokeName = "pikachu"

async function getPokemon(pokeName) {

    try{

        const promise = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)

        if(promise.ok){

            const data = await promise.json();
            return data
            
        }

            console.error("something went wrong")

    }
    catch(error){
        console.log(error);
        
    }
}

// getPokemon(pokeName).then((pokemonList)=> console.log(pokemonList))


const fetchButton = document.querySelector(".fetchButton")

const display = document.querySelector(".display")

fetchButton.addEventListener("click", async function logP(){
    const displayPlaceholder = document.querySelector(".displayPlaceholder")

    const displayPlaceholderValue = displayPlaceholder.value.trim()

    displayPlaceholder.value = ""

    const pokemon = await getPokemon(displayPlaceholderValue)

    console.log(pokemon);

    const img = document.querySelector(".img")
    img.innerHTML = ""
    const image = document.createElement("img")
    image.setAttribute("src", pokemon.sprites.front_default)

    img.appendChild(image)


    
})