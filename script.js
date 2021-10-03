//function zonder argumenten

const verfRood = function(){
    console.log("The wall has been painted red")
};
verfRood();

//function met 1 argument

const verfGroen = function(item){
    console.log("The wall has been painted " + item)
};
verfGroen("green");

//2 argumenten in een function

const verfMultiply = function(welkeMuur, color){
    console.log("The " + welkeMuur + "wall has been painted " + color);
  };

verfMultiply("south-east", "grey");

verfMultiply("north", "orange");


verfMultiply("orange", "north");

//does the order of the arguments matter when calling the function? ja als je argumenten andersom draait komt het ook verkeerd. 

//what happens if you switch them in the function definition? werkt niet meer, krijgt undefined

//what happens if you change the order of the arguments in the function definition and when calling the function? de volgorde veranderd

// The order of the arguments matters
paintWall3("yellow", "north"); // The yellow wall has been painted north

// The order in the function definition also matters
const paintWall4 = function(color, whichWall) {
    console.log(`The ` + whichWall + ` wall has been painted ` + color); // String concatenation
    // or
    console.log(`The ${whichWall} wall has been painted ${color}`); // String interpolation
};
paintWall4("south-east", "purple"); // The purple wall has been painted south-east

// If we change the order in the definition and the call we get a good result again
const paintWall5 = function(color, whichWall) {
    console.log(`The ` + whichWall + ` wall has been painted ` + color); // String concatenation
    // or
    console.log(`The ${whichWall} wall has been painted ${color}`); // String interpolation
};
paintWall5("blue", "west"); // The west wall has been painted blue