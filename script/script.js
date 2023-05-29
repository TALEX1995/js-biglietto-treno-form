console.log('JS OK');

// Esercizio

// Take the element from DOM

const userNameInput = document.getElementById('user-name');
const userKmInput = document.getElementById('km-route');
const userAgeInput = document.getElementById('user-age');
const generateTicket = document.getElementById('generate-ticket');
const resetInput = document.getElementById('reset-input');

// Added variable price for km and discount

const kmPrice = 0.21;

const youthDiscount = 20 / 100;

const seniorDiscount = 40 / 100;


// Validation



// Calculate the value input at the btn click

generateTicket.addEventListener('click', function(){
    // Recovery input value
    const userName = userNameInput.value;
    const userKm = userKmInput.value;
    const userAge = userAgeInput.value;
    console.log(userName, userKm, userAge);

    // Recovery element from DOM
    const userNameTicket = document.getElementById('user-name-ticket');
    const typeTicket = document.getElementById('type-ticket');
    const priceTicketPlaceholder = document.getElementById('price-ticket');
    const userNoticeDiscountPlaceholder = document.getElementById('user-notice-discount');
    const carriage = document.getElementById('carriage');
    const cpCode = document.getElementById('cp-code');

    // Calculate ticket price
    const priceTicket = userKm * kmPrice;
    console.log(priceTicket);

    // Calculate ticket price discount and ticket type

    let finalTicketPrice = priceTicket

    let typeTicketCalc = 'Biglietto Standard*'

    let userNoticeDiscount = '*Considerata la sua età non rientra in alcuna fascia per poter usufruire dello sconto sul biglietto.';

    if (userAge < 18) {
        finalTicketPrice -= finalTicketPrice * youthDiscount;
        userNoticeDiscount = '*Considerata la sua fascia d\'età rientra nello sconto giovani del 20%'
        typeTicketCalc = 'Biglietto Under 18'
    }   else if (userAge >= 65) {
        finalTicketPrice -= finalTicketPrice * seniorDiscount;
        userNoticeDiscount = '*Considerata la sua fascia d\'età rientra nello sconto anziani del 40%';
        typeTicketCalc = 'Biglietto Over 65'
    }

    console.log(typeTicketCalc, userNoticeDiscount, finalTicketPrice.toFixed(2));

    // Carriage Random Number

    const randomCarriageNumber = Math.floor((Math.random() * 10) +1);
    console.log(randomCarriageNumber);

    // CP Code random number

    const randomCpCode = Math.floor((Math.random() * (100000 - 10000)) +10000);
    console.log(randomCpCode);


    // Write final price, discount, Name, ticket type, carriage CP and Code into DOM 

    // User info 
    userNameTicket.innerText = userName

    // Type Ticket
    typeTicket.innerText = typeTicketCalc;

    // Price Ticket
    priceTicketPlaceholder.innerText = finalTicketPrice.toFixed(2) + 'euro';

    // Discount
    userNoticeDiscountPlaceholder.innerText = userNoticeDiscount;

    // Carriage random number into DOM
    carriage.innerText = randomCarriageNumber

    // CP Code random number indo DOM
    cpCode.innerText = randomCpCode

    // Ticket Display when click button generate

    const ticket = document.querySelector('.ticket');
    console.log(ticket);
    
    ticket.classList.remove('d-none');
})
 


resetInput.addEventListener('click', function(){

    // Reset button
    userNameInput.value = '';
    userKmInput.value = '';
    userAgeInput.value = '';
})


    

    

   

