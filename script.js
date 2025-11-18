document.getElementById('btn').addEventListener( 'click', () => {

    fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist,sexist,explicit')
        .then(response => response.json())
        .then(data => {
            let texto = data.type === 'single'
            ? data.joke
            : `${data.setup} ... ${data.delivery}`;
            document.getElementById('piada').innerText = texto;
        })
        .catch( () => {
            document.getElementById('piada').innerText = 'Erro ao carregar a piada';
        });
});