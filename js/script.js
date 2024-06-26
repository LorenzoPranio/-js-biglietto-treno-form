let calculate = document.getElementById('calculate');

calculate.addEventListener('click', function (){
    let kilometri = document.getElementById('km').value;
    let age = document.getElementById('age').value;
    let prezzo_biglietto = 0.21 * kilometri;
    if (age == 'maggiorenne'){
        sconto = 0;
    }
    else if (age == 'minorenne'){
        sconto = 20;
    }
    else if (age == 'over65'){
        sconto = 40;
    }
    let prezzo_finale = prezzo_biglietto - (prezzo_biglietto * sconto / 100)
    console.log(prezzo_finale.toFixed(2));
});

let btndelete = document.getElementById('delete');

btndelete.addEventListener('click', function(){
    document.getElementById('form').reset();
})