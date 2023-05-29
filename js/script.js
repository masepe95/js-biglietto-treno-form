console.log('JS OK') 

// RECUPERO ELEMENTO
const totalCost = document.getElementById('ticket-cost');
console.log(totalCost);

// COSTO PER CHILOMETRO
const ticketCostKM = 0.21.toFixed(2);

// SCONTO MINORI
const minorDiscount = (20/100);

//SCONTO SENIOR
const seniorDiscount = (40/100);


// RICHIESTA INFORMAZIONI (CHILOMETRI E ETA')
const distanceRequired = parseInt(prompt('Quanti chilometri vuoi percorrere?', 100));
const userAge = parseInt(prompt('Quanti anni hai?', 17));

// COSTO BIGLIETTO SENZA SCONTI
const totalPrice = distanceRequired * ticketCostKM;
console.log(`€ ${totalPrice.toFixed(2)}`);
totalCost.innerText = '€' + totalPrice.toFixed(2);

// CALCOLO COSTO BIGLIETTO AL NETTO DELLO SCONTO

if (userAge < 18 ) {
    let minorNetDiscount = (totalPrice * minorDiscount);
    let minorTotalPrice = totalPrice - minorNetDiscount;
    console.log(`€${minorTotalPrice.toFixed(2)}`);
    totalCost.innerText = '€' + minorTotalPrice.toFixed(2);
}
else if (userAge > 65 ) {
    let seniorNetDiscount = (totalPrice * seniorDiscount);
    let seniorTotalPrice = totalPrice - seniorNetDiscount;
    console.log(`€${seniorTotalPrice.toFixed(2)}`);
    totalCost.innerText = '€' + seniorTotalPrice.toFixed(2);
}