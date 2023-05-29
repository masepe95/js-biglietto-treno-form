console.log('JS OK') 

// RECUPERO ELEMENTI
const totalCost = document.getElementById('ticket-cost');
const userSaved = document.getElementById('saved');
const userTicketNumber = document.getElementById('ticket-number');
const userWagon = document.getElementById('wagon');
const ticketSimulator = document.getElementById('ticket-simulator');


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
    totalCost.innerText = 'Costo biglietto €' + totalPrice.toFixed(2);
    
    // CALCOLO COSTO BIGLIETTO AL NETTO DELLO SCONTO
    
    if (age === 'minor') {
        let minorNetDiscount = (totalPrice * minorDiscount);
        let minorTotalPrice = totalPrice - minorNetDiscount;
        console.log(`€${minorTotalPrice.toFixed(2)}`);
        totalCost.innerText = 'Costo biglietto €' + minorTotalPrice.toFixed(2);
        saved.innerText = 'Hai Risparmiato €' + minorNetDiscount.toFixed(2);
    }
    else if (age === 'senior' ) {
        let seniorNetDiscount = (totalPrice * seniorDiscount);
        let seniorTotalPrice = totalPrice - seniorNetDiscount;
        console.log(`€${seniorTotalPrice.toFixed(2)}`);
        totalCost.innerText = 'Costo biglietto €' + seniorTotalPrice.toFixed(2);
        saved.innerText = 'Hai Risparmiato €' + seniorNetDiscount.toFixed(2);
    }
    
})

 // RENDO VISIBILE IL BIGLIETTO SOLO AL CLICK 
button.addEventListener('click', function(){
ticketSimulator.classList.remove('d-none');
ticketSimulator.classList.add('d-block');
})

// RANDOMIZZO CABINA
button.addEventListener('click', function(){
    const random = Math.random();
    const max = 12;
    result = Math.floor(random * max) + 1;
    userWagon.innerText = 'Cabina N.' + result;})

// RANDOMIZZO CODICE BIGLIETTO
button.addEventListener('click', function(){
    const random = Math.random();
    const min = 1999;
    const max = 9999;
    result = Math.floor(random * (max + 1 - min)) + min;
    userTicketNumber.innerText = 'Codice CP ' + result;})