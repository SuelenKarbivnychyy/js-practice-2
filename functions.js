'use strict';

/**
 * Given a `town`, return `True` if `town` is 'San Francisco'. 
 * @param {*} town : A town
 * @returns : bool: True if `town` is 'San Francisco'
 */

const isHometown = (town) => {

    return town === 'San Francisco';

}
// console.log(isHometown('San Francisco'));


/**
 * Given `first_name` and `last_name`, return a full name.
 * @param {*} firstName : str: A name
 * @param {*} lastName : str: a Last mame
 * @returns : str: A full name
 */

const getFullName = (firstName, lastName) => {
    
    return `Hello ${firstName} ${lastName}`;
}
// console.log(getFullName('Suelen', 'Matos'));


/**
 * Return the total price of an item, figuring in state taxes and fees.
 * @param {*} basePrice : Price of an item
 * @param {*} state : (str) Two-letter abbreviation of a U.S. state
 * @param {*} tax : Tax rate. Defaults to 0.05
 * @returns 
 */
const calculateTotal = (basePrice, state, tax = 0.05) => {
    
    const subtotal = basePrice * (1 + tax);

    let fee = 0;

    if (state === 'CA') {
        fee = 0.03 * subtotal;
    } else if (state === 'PA') {
        fee = 2;
    } else if (state === 'MA') {
        if (basePrice <= 100) {
            fee = 1;
        } else {
            fee = 3;
        }
    }

    return subtotal + fee;

}

// console.log(calculateTotal(30, 'MA'));