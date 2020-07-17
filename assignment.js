// feetToMile

function feetToMile(feet) {
    var mile = feet / 5280;
    return mile;
}
var distanceFeet = feetToMile(50000);
console.log(distanceFeet.toFixed(2));


//woodCalculator

function woodCalculator(chair, table, bed) {
    var chairWood = chair * 1;
    var tableWood = table * 3;
    var bedWood = bed * 5;
    var totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}
var furnitureItems = woodCalculator(2, 6, 5);
console.log(furnitureItems);


// brickCalculator

function brickCalculator(floor) {
    var feetBrick = 1000;
    if (floor == 10) {
        return 15 * feetBrick;
    } else if (floor >= 11 || floor <= 20) {
        return 12 * feetBrick;
    } else if (floor > 20) {
        return 10 * feetBrick
    }
    return feetBrick;
}

var totalFloor = brickCalculator(15);
console.log(totalFloor);


//tinyFriend

function tinyFriend(names) {
    var friendList = names[0].length;
    var smallFriend;
    for (var i = 0; i < names.length; i++) {
        if (friendList > names[i].length) {
            friendList = names[i].length;
            smallFriend = names[i];
        }
    }
    return smallFriend;
}
var friendNames = ["Md Alamin", "Minan Mahmud Munna", "Mahirul Mahmud Panna", "Dithi Sultana", "JSE"];
console.log(tinyFriend(friendNames));