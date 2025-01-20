// Code your solution in this file!
const distanceFromHqInBlocks = function(num) {
    const hqLocation = 42;
    const distance = Math.abs(num - hqLocation);
    return distance;
};

const distanceFromHqInFeet = function(num){
    return distanceFromHqInBlocks(num) * 264
}

const  distanceTravelledInFeet = function(num1 , num2){
    const blocks = Math.abs(num1 - num2);
    return blocks * 264;
};

const  calculatesFarePrice = function(num1, num2){
    let fare = 2;
    const distanceInFeet  = Math.abs(num1 - num2) * 264;
    if (distanceInFeet <= 400){
        return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000){
        return fare = (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500){
        return fare = 25;
    } else if (distanceInFeet > 2500) {
        return "cannot travel that far"
    }
}