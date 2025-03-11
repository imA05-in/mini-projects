async function pokimane() {
    const f = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")

    const data = await f.json()

    console.log(data);
    
}

pokimane() 