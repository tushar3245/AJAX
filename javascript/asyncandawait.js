let buttonThree = document.getElementById('three');
let divThree = document.getElementsByTagName('div')[0];

buttonThree.addEventListener('click', displayJoke);

async function displayJoke() {
    // use await to wait for the response to come back before continuing
    const response = await fetch("https://icanhazdadjoke.com", {
        headers: {
            "Accept": "application/json"
        }
    });

    // now continue
    const jokeObject = await response.json();
    const lowercaseJoke = jokeObject.joke.toLowerCase();

    // finally, render the joke into our div
    divThree.innerHTML = lowercaseJoke;
}
