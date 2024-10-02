export function rentCar(car, days){
    car.isAvaiable = false;
    console.log(`The car has successfully been rented for ${days} days. `);
}

export function returnCar(car){
    car.isAvaiable = true;
    console.log('The car has successfully been returned'); 
}