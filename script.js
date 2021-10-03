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
    console.log("The " + welkeMuur + " wall has been painted " + color);
  };

verfMultiply("south-east", "grey");

verfMultiply("north", "orange");



//does the order of the arguments matter when calling the function? ja als je argumenten andersom draait komt het anders vermeld: The orange wall has been painted north

const verfMultiply1 = function(welkeMuur, color){
    console.log("The " + welkeMuur + " wall has been painted " + color);
  };

verfMultiply1("grey", "south-east");

verfMultiply1("orange", "north");

//what happens if you switch them in the function definition? ja als je welkeMuur en color andersom draait in function, krijg je ook het andersom
const verfMultiply2 = function(color, welkeMuur){
    console.log("The " + welkeMuur + " wall has been painted " + color);
  };

verfMultiply2("south-east", "grey");

verfMultiply2("north", "orange");



//what happens if you change the order of the arguments in the function definition and when calling the function? de volgorde bljft hetzelfde want bij het uitvoeren van de functie ga je ook de juiste argument volgorde aanhouden
const verfMultiply3= function(color, welkeMuur){
    console.log("The " + welkeMuur + " wall has been painted " + color);
  };

verfMultiply3("grey", "south-east");

verfMultiply3("orange", "north");


