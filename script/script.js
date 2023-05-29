console.log('JS OK');

// Esercizio

// Take the element from DOM

const userNameInput = document.getElementById('user-name');
const userKmInput = document.getElementById('km-route');
const userAgeInput = document.getElementById('user-age');
const generateTicket = document.getElementById('generate-ticket');

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


})
 


    // Calculate ticket price

    const priceTicket = userKm * kmPrice;
    console.log(priceTicket);


    // Calculate ticket price and discount

    let finalTicketPrice = priceTicket

    let userNoticeDiscount = 'Considerata la sua età non rientra in alcuna fascia per poter usufruire dello sconto sul biglietto.';

    if (userAge < 18) {
        finalTicketPrice -= finalTicketPrice * youthDiscount;
        userNoticeDiscount = 'Considerata la sua fascia d\'età rientra nello sconto giovani del 20%'
}   else if (userAge >= 65) {
        finalTicketPrice -= finalTicketPrice * seniorDiscount;
        userNoticeDiscount = 'Considerata la sua fascia d\'età rientra nello sconto anziani del 40%';
}

    console.log(userNoticeDiscount);

    console.log(finalTicketPrice.toFixed(2));

    // Write final price and discount into DOM 

    priceTicketPlaceholder.innerText = finalTicketPrice.toFixed(2);

    userNoticeDiscountPlaceholder.innerText = userNoticeDiscount;


    // Write Discount in the DOM



    // BONUS

    // insert km route in DOM

    const kmRoutePlaceholder = document.getElementById('km-route');
    kmRoutePlaceholder.innerText = userKm + 'km';

    // insert age user in DOM

    const userAgePlaceholder = document.getElementById('user-age');
    userAgePlaceholder.innerText = userAge + ' ' + 'anni';

   

