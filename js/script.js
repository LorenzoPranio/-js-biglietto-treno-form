let calculate = document.getElementById('calculate');

calculate.addEventListener('click', function (){
    let kilometri = document.getElementById('km').value;
    let age = document.getElementById('age').value;
    let prezzo_biglietto = 0.21 * kilometri;
    let sconto = 0;
    if (age == 'minorenne'){
        sconto = 20;
    }
    else if (age == 'over65'){
        sconto = 40;
    }
    let prezzo_finale = prezzo_biglietto - (prezzo_biglietto * sconto / 100)
    console.log(prezzo_finale.toFixed(2));

    let name_surname = document.getElementById('name').value;

    document.getElementById('name-surname').innerHTML = name_surname;

    console.log(name_surname)

    document.getElementById('prezzo-finale').innerHTML = prezzo_finale.toFixed(2) + '&euro;'
});

let btndelete = document.getElementById('delete');

btndelete.addEventListener('click', function(){
    document.getElementById('form').reset();
})

