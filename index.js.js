// var post = prompt("Compose your post:");
// var postunder140 = post.slice(0,140);

// alert(postunder140);

//alert(prompt("Compose your post:").slice(0,140));
// var name = prompt("What is your name?");
// var first = name.slice(0,1);
// var cap = first.toUpperCase();
// var low = name.slice(1, name.length);
// var capitalised = cap + low.toLowerCase();
// alert("Hello, " + capitalised + "!");

// var dogAge = prompt("How old is your dog?");
// var humanAge = ((dogAge - 2) * 4) + 21;
// alert("Your dog is " + humanAge + " years old!");

//var x  = 5;
//x = x + 1; //6 or x++ increase by 1
//x--;//4 decrecease by 1
//x += 2;//7 increase by 2 or more with +=
//x -= 2;//3 decrease by 2 or more with -=
// var x = 5;
// var y = 3;
// x += y; //8

//functions

// function getMilk() {

//                 console.log(“leaveHouse”);

//                 console.log(“moveRight”);

//                 console.log(“moveRight”);

//                 console.log(“moveUp”);

//                 console.log(“moveUp”);

//                 console.log(“moveUp”);

//                 console.log(“moveUp”);

//                 console.log(“moveRight”);

//                 console.log(“moveRight”);

//                 console.log(“buyMilk”);

//                 console.log(“moveLeft”);

//                 console.log(“moveLeft”);

//                 console.log(“moveLeft”);

//                 console.log(“moveDown”);

//                 console.log(“moveDown”);

//                 console.log(“moveDown”);

//                 console.log(“moveDown”);

//                 console.log(“moveLeft”);

//                 console.log(“moveLeft”);

//                 console.log(“enterHouse”);

// }

 

// function getMilk(bottles) {

//                 console.log(“leaveHouse”);

//                 console.log(“moveRight”);

//                 console.log(“moveRight”);

//                 console.log(“moveUp”);

//                 console.log(“moveUp”);

//                 console.log(“moveUp”);

//                 console.log(“moveUp”);

//                 console.log(“moveRight”);

//                 console.log(“moveRight”);

 

//                 var cost = bottles * 1.5;

 

//                 console.log(“buy” + bottles + ”bottles of Milk);

//                 console.log(“moveLeft”);

//                 console.log(“moveLeft”);

//                 console.log(“moveLeft”);

//                 console.log(“moveDown”);

//                 console.log(“moveDown”);

//                 console.log(“moveDown”);

//                 console.log(“moveDown”);

//                 console.log(“moveLeft”);

//                 console.log(“moveLeft”);

//                 console.log(“enterHouse”);

// }

 

// getMilk(12);

 

// function getMilk(money) {

//                 console.log(“leaveHouse”);

//                 console.log(“moveRight”);

//                 console.log(“moveRight”);

//                 console.log(“moveUp”);

//                 console.log(“moveUp”);

//                 console.log(“moveUp”);

//                 console.log(“moveUp”);

//                 console.log(“moveRight”);

//                 console.log(“moveRight”);

 

//                 var numberOfBottles = Math.floor(money / 1.5);

 

//                 console.log(“buy” + numberOfBottles + ”bottles of Milk);

 

//                 console.log(“moveLeft”);

//                 console.log(“moveLeft”);

//                 console.log(“moveLeft”);

//                 console.log(“moveDown”);

//                 console.log(“moveDown”);

//                 console.log(“moveDown”);

//                 console.log(“moveDown”);

//                 console.log(“moveLeft”);

//                 console.log(“moveLeft”);

//                 console.log(“enterHouse”);

// }

 

// getMilk(5);

 

// function getMilk(money) {

//                 console.log(“leaveHouse”);

//                 console.log(“moveRight”);

//                 console.log(“moveRight”);

//                 console.log(“moveUp”);

//                 console.log(“moveUp”);

//                 console.log(“moveUp”);

//                 console.log(“moveUp”);

//                 console.log(“moveRight”);

//                 console.log(“moveRight”);

 

//                 var numberOfBottles = Math.floor(money / 1.5);

 

//                 console.log(“buy” + numberOfBottles + ”bottles of Milk);

 

//                 console.log(“moveLeft”);

//                 console.log(“moveLeft”);

//                 console.log(“moveLeft”);

//                 console.log(“moveDown”);

//                 console.log(“moveDown”);

//                 console.log(“moveDown”);

//                 console.log(“moveDown”);

//                 console.log(“moveLeft”);

//                 console.log(“moveLeft”);

//                 console.log(“enterHouse”);

 

// return money % 1.5;

// }

 

// var change = getMilk(4);

// //change = 1

// console.log(change);

 

// function getMilk(money) {

//                 console.log(“leaveHouse”);

//                 console.log(“moveRight”);

//                 console.log(“moveRight”);

//                 console.log(“moveUp”);

//                 console.log(“moveUp”);

//                 console.log(“moveUp”);

//                 console.log(“moveUp”);

//                 console.log(“moveRight”);

//                 console.log(“moveRight”);

 

//                 console.log(“buy” + calcBottles(money, 1.5) + “ bottles of milk”);

 

//                 console.log(“moveLeft”);

//                 console.log(“moveLeft”);

//                 console.log(“moveLeft”);

//                 console.log(“moveDown”);

//                 console.log(“moveDown”);

//                 console.log(“moveDown”);

//                 console.log(“moveDown”);

//                 console.log(“moveLeft”);

//                 console.log(“moveLeft”);

//                 console.log(“enterHouse”);

 

// return calcChange(money, 1.5);

// }

 

 

// function calcBottles(startingMoney, costPerBottle) {

 

//                 var numberOfBottles = Math.floor(startingMoney / costPerBottle);

 

//                 return numberOfBottles;

// }

 

// function calcChange(startingAmount, costPerBottle) {

//                 var change = startingAmount % costPerBottle;

//                 return change;

// }

 

// console.log(“Hello master, here is your “ + getMilk(5) + “ change.”);

 

// function getMilk(money, costPerBottle) {

//                 console.log(“leaveHouse”);

//                 console.log(“moveRight”);

//                 console.log(“moveRight”);

//                 console.log(“moveUp”);

//                 console.log(“moveUp”);

//                 console.log(“moveUp”);

//                 console.log(“moveUp”);

//                 console.log(“moveRight”);

//                 console.log(“moveRight”);

 

//                 console.log(“buy” + calcBottles(money, costPerBottle) + “ bottles of milk”);

 

//                 console.log(“moveLeft”);

//                 console.log(“moveLeft”);

//                 console.log(“moveLeft”);

//                 console.log(“moveDown”);

//                 console.log(“moveDown”);

//                 console.log(“moveDown”);

//                 console.log(“moveDown”);

//                 console.log(“moveLeft”);

//                 console.log(“moveLeft”);

//                 console.log(“enterHouse”);

 

// return calcChange(money, costPerBottle);

// }

 

 

// function calcBottles(startingMoney, costPerBottle) {

 

//                 var numberOfBottles = Math.floor(startingMoney / costPerBottle);

 

//                 return numberOfBottles;

// }

 

// function calcChange(startingAmount, costPerBottle) {

//                 var change = startingAmount % costPerBottle;

//                 return change;

// }

 

// console.log(“Hello master, here is your “ + getMilk(5, 1.5) + “ change.”);

 




//BMI challenge

// function bmiCalculator(weight, height) {

//                 var bmi = weight / Math.pow(height, 2) ;

//                 return Math.round(bmi);

// }

 

// var bmi = bmiCalculator(65, 1.8);

// console.log(bmi)




// If my weight is 65kg and my height is 1.8m, call function below:

//var bmi = bmiCalculator(65, 1.8);
//console.log(bmi);

//bmi should equal 20.