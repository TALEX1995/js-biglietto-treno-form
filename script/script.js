console.log('JS OK');

// Esercizio

// Take the element from DOM

const priceTicketPlaceholder = document.getElementById('price-ticket');
console.log(priceTicketPlaceholder);

const userNoticeDiscountPlaceholder = document.getElementById('user-notice-discount');
console.log(userNoticeDiscountPlaceholder);


// KM Request to the user

const userKm = parseInt(prompt('Please enter the km of the route', 37));
console.log(userKm);


// Request User Age

const userAge = parseInt(prompt('Please enter your age', 22));
console.log(userAge);


// Added variable price for km and discount

const kmPrice = 0.21;

const youthDiscount = 20 / 100;

const seniorDiscount = 40 / 100;


// Validation

if (isNaN(userKm) || isNaN(userAge)) {
    alert ('E necessario inserire un numero');
} else if (userKm < 1 || userAge < 1) {
    alert ('E necessario inserire un numero maggiore di 1');
} else {
    
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

   

    
    
}

