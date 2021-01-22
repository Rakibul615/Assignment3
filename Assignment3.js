//1. KILOMETER TO METER CONVERSION PROBLEM SOLUTION

function kilometerToMeter(valueOfKilometer) {
    if (valueOfKilometer > 0) {
        let valueOfMeter = valueOfKilometer / 1000;
        return valueOfMeter;
    }
    else {
        return 'negative numer not allowed. Enter the positive number'
    }
}
let element = kilometerToMeter(87);
console.log(element);


//2. BUDGET CALCULATOR PROBLEM SOLUTION

function budgetCaculator(itemQuantity) {

    let total = 0;
    for (let i = 0; i < itemQuantity.length; i++) {
        if (Number.isNaN(itemQuantity[i])) {
            continue;
        }
        else {
            total = total + Number(itemQuantity[0] * 50 + itemQuantity[1] * 100 + itemQuantity[2] * 500);
        }
    }

    return total;
}
let itemQuantity = budgetCaculator([]);
console.log(itemQuantity);


//3. hotel cost problem solution

function hotelCost(days) {
    const cost10Days = 10 * 100;
    const cost11To20Days = 10 * 80;
    if (days > 0 && days <= 10) {
        let totalHotelCostFirstTenDays = days * 100;
        return totalHotelCostFirstTenDays;
    }
    else if (days > 10 && days <= 20) {
        //let totalHotelCostFirstTenDays=10*100;
        let remainingDays = days - 10;
        let hotelCost11To20 = remainingDays * 80;
        let totalHotelCostTwentyDays = cost10Days + hotelCost11To20;
        return totalHotelCostTwentyDays;
    }
    else if (days > 20) {
        // let   totalHotelCostFirstTenDays=10*100;
        //let hotelCost11To20=10*80;

        let remainingDays = days - 20;
        let hotelCostUpto20 = remainingDays * 50;
        let totalHotelCostOverTwentyDays = cost10Days + cost11To20Days + hotelCostUpto20;
        return totalHotelCostOverTwentyDays;
    }
    else {
        return "you did not stay in this hotel for a day. Thank you"
    }
}
let numberOfDays = hotelCost(0);
console.log(numberOfDays);


//4.MEGA FRIEND PROBLEM SOLUTION

function friendList(friendName) {
    if (friendName.length > 0) {
        let largestTempValue = 0;
        let largestName;

        for (let i = 0; i < friendName.length; i++) {
            if (friendName[i].length > largestTempValue) {
                largestTempValue = friendName[i].length;
                largestName = friendName[i];
            }
        }
        return largestName;

    }
    else {
        return 'array is empty';
    }
}
let friendName = friendList(['ibrahim', 'tibrow']);
console.log(friendName);
