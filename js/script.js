//funzione crea casella della griglia
function createSingleSquare(num){
    const square = document.createElement('div');
    square.classList.add('square');
    square.innerText = num;
}

//richiamo il pulsante 
const button = document.getElementById('play');

//evento click
button.addEventListener('click', function(){
    //console.log('cominciamo la partita');

    //recupero elem che dovrà contenere la griglia dal dom
    const grid = document.getElementById('grid');
});

