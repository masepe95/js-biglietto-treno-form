console.log('JS OK') 

// RECUPERO ELEMENTI
const totalCost = document.getElementById('ticket-cost');


// COSTO PER CHILOMETRO
const ticketCostKM = 0.21.toFixed(2);

// SCONTO MINORI
const minorDiscount = (20/100);

//SCONTO SENIOR
const seniorDiscount = (40/100);


// RICHIESTA INFORMAZIONI (CHILOMETRI E ETA')
const distanceRequired = document.getElementById('km-request');
const userAge = document.getElementById('age-request');
const button = document.getElementById('button')

// FUNZIONE DEL CALCOLO AL CLICK
button.addEventListener('click', function(){
    const distance = parseInt(distanceRequired.value);
    const age = (userAge.value);
    // COSTO BIGLIETTO SENZA SCONTI
    const totalPrice = distance * ticketCostKM;
    console.log(`€ ${totalPrice.toFixed(2)}`);
    
    // CALCOLO COSTO BIGLIETTO AL NETTO DELLO SCONTO
    
    if (age === 'minor') {
        let minorNetDiscount = (totalPrice * minorDiscount);
        let minorTotalPrice = totalPrice - minorNetDiscount;
        console.log(`€${minorTotalPrice.toFixed(2)}`);
    }
    else if (age === 'senior' ) {
        let seniorNetDiscount = (totalPrice * seniorDiscount);
        let seniorTotalPrice = totalPrice - seniorNetDiscount;
        console.log(`€${seniorTotalPrice.toFixed(2)}`);
    }
    
})