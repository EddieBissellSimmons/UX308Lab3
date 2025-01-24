//function that =converts= ==kilometers== to ==miles==

function convertKilometersToMiles(kilometers){
    let miles = kilometers/1.609;
    return miles;
}


let kilometers = 720;
let miles = convertKilometersToMiles(kilometers);

console.log(`${kilometers} kilometers is ${miles} miles.`);