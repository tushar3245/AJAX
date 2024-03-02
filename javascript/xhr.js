let button = document.getElementById('one');
let div = document.getElementsByTagName('div')[0];

button.addEventListener('click', () => {
    // 1: create a XMLHttpRequest
    let xhr = new XMLHttpRequest();
    
    xhr.open("GET", "https://icanhazdadjoke.com");
    xhr.setRequestHeader('Accept', "application/json");
    
    // 2: callback
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const jsonData = JSON.parse(xhr.responseText);
            div.innerText = jsonData.joke;
        }
    };
    
    xhr.send();
});
