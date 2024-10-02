import Car from './car.js';
import { rentCar, returnCar } from './rental.js'; 
import { calculateRentalPrice } from './priceCalculator.js';
import promptSync from 'prompt-sync';

const prompt = promptSync();

let car1 = new Car('Toyota', 'Camry', 2025, 20, true);

let daysToRent = prompt('How many days do you want to rent this car? ')

rentCar(car1, daysToRent);
console.log(`The total price for renting the ${car1.make + " " + car1.model} for ${daysToRent} days is ${calculateRentalPrice(daysToRent, car1.pricePerDay)}`);
returnCar(car1);