// fetch = Function used for making HTTP requests to fetch resorces.
// Those resorces are JSON style,images,files
// Simplifies the data fetching in javascript and used for intreacting API to recive data and send to web
// fetch(url,{options})
// Defoult object option method is GET and POST,SEND,PUT(replace data),DELETE
// Getting the data from the with only URL

//fetch("https://pokeapi.co/api/v2/pokemon/pikachu/spongebob") //This is promise based function either resolve and reject and also fetch is string formd 
// .then(Response => Response.json())// json method is object oriented method

//.then(data => console.log(data.weight)) // that function is resolved it is going to then

//.catch(error => console.error(error)); // thet function is rejected it is going to catch and show the error message

// Informational responses(100 – 199)
// Successful responses(200 – 299)
// Redirection messages(300 – 399)
// Client error responses(400 – 499)
// Server error responses(500 – 599)

// .then(Response => {
//     if (!Response.ok) {//When response id not okay to shift to error 
//         //spongebob resorce is not in pikachu 
//         throw new error("could not fetch resorce");//To show this error like displayed 
//     }
//     return Response.json();
// })
// .then(data => console.log(data.id))
// .catch(error => console.error(error));

fetchData();
//async is to check the procedure to set the correct path 
// async function fetchData() {
//     try {// try is the block in side the block of the code to try the tested the errors after the allows the catch
//         const pokemonName = document.getElementById("pokemonName").Value;
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
//         //await is the wait for the response of the given code in that line 

//         if (!response.ok) {
//             throw new Error("could not fetch resorce");
//         }
//         const data = await response.json();
//         console.log(data);

//     }
//     catch (error) {
//         console.error(error);
//         //catch is code of handle the errors 
//     }
// }
// async function fetchData() {
//     try {
//         const pokemonName = document.getElementById("pokemonName").value;
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

//         if (!response.ok) {
//             throw new Error("Could not fetch resource");
//         }

//         const data = await response.json();
//         const pokemonSprite = data.sprites.front_default
//         const imgElement = document.getElementById("pokemonSprite");
//         imgElement.src = pokemonSprite;
//         imgElement.style.display = "block"

//     } catch (error) {
//         console.error(error);
//     }
// }   

async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokemonName").value;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;

        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    } catch (error) {
        console.error(error);
    }
}