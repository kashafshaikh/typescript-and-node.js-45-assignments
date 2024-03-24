//Exercise 2
//Personal message

let personName: string="ERIC";
console.log(`hellow ${personName}, would you like to learn some python today?`);

//Exercise 3
//Name cases

//Inner case
let personName: string ="Kashaf"
console.log("lowercase:", personName.toLowerCase());

//uppercase
console.log("uppercase:", personName.toLocaleUpperCase());

//titlecase
console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));

//Exercise 4
//Famous Qoute

let qoute: string= "A person who never made a mistake never tried anything new";
let author: string= "Albert Einstein"
console.log(`${author} once said, "${qoute}`);

//Exercise 5
//Famous Qoute2

let qoute: string= "A person who never made a mistake never tried anything new";
let famous_person="Albert Einstein";
let message=`${famous_person} once said, ${qoute}`;
console.log(message);

//Exercise 6
//Stripping Names

let personName: string =`\n\t BABAR AZAM\t\n`;
console.log(personName);
let stripped: string = personName.trim();
console.log(stripped);

//Exercise 7,8
//Number Eight

console.log(5+3);
console.log(11-3);
console.log(4*2);
console.log(16 / 2);

//Exercise 9
//Favorite Number

let favoriteNumber: number =  4;
console.log(`My favourite number is ${favoriteNumber}`);

//Exercise 10
//Adding Comments

//my name is kashaf
//Dated: 18/02/2024
//this program will run simple code just like hello world
console.log('hello world simple program');

//my name is kashaf
//Dated: 18/02/2024
//this program will multiplicatiion 
console.log(5 * 2);

//Exercise 11
//Person's Name

let members: string[] =['azam','saqlain','mehmood','saba','sana'];
for(let i=0; i<members.length; i++){
    console.log(members[i]);
}

//Exercise 12
//Names

let members: string[] =['hafsa','fatima','muskan','omama','arhama'];
let message: string='kal pehla prilium ha:';
for(let i=0; i<members.length; i++){
    console.log(message + members[i]);
}

//Exercise 13
//Transportation

let transportation : string [] = ['Vitz','Civic','lamborghinni','bmw'];
for (let i = 0; i<transportation.length; i++){
    console.log('I would like to own a ' + transportation[i]);
}

//Exercise 14
//Guest list

let guest_list : string [] = ['sara','amir','hania','kinza'];
for (let i=0; i<guest_list.length; i++){
  console.log('Respected Sir/Madam ' +guest_list[i] +',\nWe invited you on dinner tomorrow.\nThank You\n')
}
export{guest_list}

//Exercise 15
//Changing Guest_list

let not_present : string = 'amir';
let new_guest : string = 'umeed';
guest_list[1] = new_guest;
for (let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam ' +guest_list[i] +',\nWe invited you on dinner tomorrow.\nThank You\n')
}

//Exercise 16
//More Guests

 let guest_list : string [] = ['sara','amir','hania','kinza'];
   for (let i=0; i<guest_list.length; i++){   
     console.log('Respected Sir/Madam ' + guest_list[i] +',\nWe invited you on dinner tomorrow.\nThank You\n')
   }
   let not_present : string = 'amir';
   let new_guest : string = 'umeed';
   guest_list[1] = new_guest;
   for (let i=0; i<guest_list.length; i++){
      console.log('Respected Sir/Madam ' +guest_list[i] +',\nWe invited you on dinner tomorrow.\nThank You\n')
    }
    guest_list.unshift('aina','mahjabeen','dua');
   for (let i=0; i<guest_list.length; i++){
      console.log('Respected Sir/Madam ' +guest_list[i] +',\nWe invited you on dinner tomorrow. we found big table so we decided to invite three more guests\nThank You\n')
   }

//Exercsie 17
//Shrinking Guest list

let guest_list : string [] = ['sara','amir','hania','kinza'];
  for (let i=0; i<guest_list.length; i++){
      console.log('Respected Sir/Madam ' + guest_list[i] +',\nWe invited you on dinner tomorrow.\nThank You\n')
  }
let not_present : string = 'amir';
let new_guest : string = 'umeed';
  guest_list[1] = new_guest;
  for (let i=0; i<guest_list.length; i++){
      console.log('Respected Sir/Madam ' +guest_list[i] +',\nWe invited you on dinner tomorrow.\nThank You\n')
  }
  guest_list.unshift('aina','mahjabeen','dua');
  for (let i=0; i<guest_list.length; i++){
      console.log('Respected Sir/Madam ' +guest_list[i] +',\nWe invited you on dinner tomorrow. we found big table so we decided to invite three more guests\nThank You\n')
  }
      console.log('\nUnfortunately we can not arrange big table , Only two people allow.')
  while(guest_list.length>2){
  let remove_guest = guest_list.pop();
      console.log(`Sorry Sir/Madam. ${remove_guest} you are not invited for dinner `);
  }
  for (let i=0; i<guest_list.length; i++){
      console.log('Respected Sir/Madam' +guest_list[i]+',\nYes you are still invited on tomorrow dinner.\nThank you.\n')
  }
  guest_list.splice(0,2)
      console.log(guest_list)

//Exercise 18
//Seeing the world

let places : string []= ['canada','dubai','finland','bombay','abotabad']
console.log('original :'+ places);

//print your array in alphabetical order without modifying the actual list.
console.log('copy :'+[...places].sort());

//show that your array is still in its original order by printing it.
console.log ('original :'+ places);

//print your array in reverse alphabetical order without changing the order of the original list.
console.log('copy :' + [...places].sort().reverse());

//show that yout array is still in its original order by printing it again.
console.log ('original :'+ places);

//Reverse the order of your list.Print the array to show that its order has changed.
console.log('original :'+ places.reverse());

//Reverse the order of your list again.Print the list to show its back to its original order.
console.log('original :'+ places.reverse());

//sort your array so its stored in alphabetical order .Print the array to show that its order has been changed.
console.log('original :'+ places.sort());

//sort to change your array so its stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log('original :'+ places.sort().reverse());

//Exercise 19
//Dinner Guest

import{ guest_list }from '../14.Guest list/app'
console.log(`n\ PRINTING NUMBER OF GUEST INVITED`)
console.log(`we had finally invited ${guest_list.length} people from exercise 14`)

//Exercise 20
//Think Languages

let languages : string []=['french','urdu','english','arabic','hindi'];
console.log("list of languages: ")
for(let top of languages){
    console.log(top)
}

//Exercise 21
//Typescript Object

import { appendFile } from "fs"

interface item{
    name:string 
    price:number
}
//create  two objects
const book:item = {
    name:'ESSENTIAL TYPESCRIPT',
    price:450
}
const apple:item={
    name:'apple',
    price:200
}
console.log(`book name: ${book.name}, price: $${book.price}`)
console.log(`apple name: ${apple.name}, price: $${apple.price}`)

//Exercise 22
//Intensional Error

let array: (string | number) [] = ['areeba','hooriya',3,4,8,'sana'];
console.log (array[5]);
console.log (array[0]);
console.log (array[1]);
console.log (array[2]);
console.log (array[3]);
console.log (array[4]);

//Exercise 23
//Conditional Case

let car: string = 'subaru';

//test 1:Equality comparison (true)
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // true

//test 2: Strict equality comparison (True)
console.log("Is car === 'subaru' ? I predict true.");
console.log(car === 'subaru'); // True

//test 3: Inequality comparison (False)
console.log("Is car != 'subaru' ? I predict false.");
console.log(car != 'subaru'); // false

//test 4: Strict inequality camparison (False)
console.log("Is car !== 'subaru' ? I predict false.");
console.log(car !== 'subaru'); // false

//Test 5: Less than comparison (False)
console.log("Is car < 'subaru' ? I predict false.");
console.log(car < 'subaru'); // false (lexicographic comparison)

//Test 6: Greater than comparison (False)
console.log("Is car > 'subaru' ? I predict false.");
console.log(car > 'subaru'); // false (lexicographic comparison)

//Text 7: less than or equal comparison (True)
console.log("Is car <= 'subaru' ? I predict false.");
console.log(car <= 'subaru'); // false 

//Test 8: Greater than or equal comparison (true)
console.log("Is car >= 'subaru' ? I predict True.");
console.log(car >= 'subaru'); // True

//Test 9: Checking truthiness (true)
console.log("Is car? I predict True.");
console.log(car); //True (non-empty string is truthy)

//Test 10: Checking falsiness (false)
console.log("Is !car? I predict false.");
console.log(!car);//False (negative of a truthy value)

//Exercise 24
//More Conditional Tests

let car: string = 'Subaru';
let age: number = 25;
let numbers: number[]= [1,2,3,4];

// ** string test **
//Test 1: Equality (True)
console.log("Is car == 'Subaru'? I predict True.");
console.log(car == 'Subaru'); //True (case-insensitive)

//Test 2: Strict equality (False)
console.log("Is car === 'Subaru'? I predict False.");
console.log(car ==='Subaru'); // False (case-sensitive)

//Test 3: Inequality (True)
console.log("Is car != 'Toyota'? I predict True.");
console.log(car != 'Subaru'); // True

//Test 4: Inequality (False)
console.log("Is car !== 'Toyota'? I predict False.");
console.log(car !== 'Subaru'); // False (case-sensitive)

// ** LowerCase Function Test**
//Test 5: Lowercase conversion (True)
console.log("Is car.toLowerCase() == 'Subaru'? I predict True.");
console.log(car.toLowerCase() == 'Subaru'); // True (converted to lowercase)

//Test 6: Lowercase conversion (False)
console.log("Is car === car.toLowerCase()? I predict False.");
console.log(car === car.toLowerCase()); // False (original value remains uppercase)

// **Numerical Tests**
//Test 7: Equality (True)
console.log("Is age == 25? I predict true.");
console.log(age == 25); // True

//Test 8: Inequality (False)
console.log("Is age != 30? I predict True.");
console.log(age != 30); // True

//Test 9: Greater than (False)
console.log("Is age > 30? I predict False.");
console.log(age > 30); // False

//test 10: Less than or equal (True)
console.log("Is age <= 25? I predict True.");
console.log(age <= 25); // True

// **Logical Operators**
//Test 11: AND (True)
console.log("Is age > 20 && age < 30? I predict True.");
console.log(age > 20 && age < 30); // True (both conditions met)

//Test 12: OR (False)
console.log("Is age > 30 || age < 18? I predict False.");
console.log(age > 30 || age < 18); // False (neither condition met)

// **Array Tests**
//Test 13: In array (True)
console.log ("Is 3 in numbers? I predict True");
console.log(3 in numbers); // True (checks for index existance) 

//Test 14: Not in array (False)
console.log ("Is 5 not in numbers? I predict True");
console.log(5 not in numbers); // True (negative of "in" operator)

//Exercise 25
//Alien Colors#1

//create a variable called alien
let alien_color: string = "green";

// write an statement to test whether the aliens color is green. If it is,
//print a message that the player just earned 5 points.
if(alien_color == "green"){
    console.log("the player just earned 5 points.");
}

//write one version of this program  that passes the if test and another that fails.(The version that fails will have no output.)

alien_color = "red";
if(alien_color == "green"){
    console.log ("the player just earned 5 points");
}

//Exercise 26
//Alien colors#2

//choose a color for an alien as you did in exercise 25, and write an if-else chain.
let alien_color: string = "green";

//if the alien color is green, print a statement that
//the player just earned 5 points for shooting the alien.
if(alien_color == "green"){
    console.log("the player just earned 5 points for shooting the alien.");
}
else{
    console.log("the player just earned 10 points.")
}
alien_color = "red";
if(alien_color == "green"){
    console.log("the player just earned 5 points for shooting the alien.");
}

//Exercise 27
//Alien Colors#3

let alien_color: string = "green";
//if the alien is green, print a message that the player earned 5 points.
if(alien_color == "green"){
    console.log("the player just earned 5 points.");
}

//is the alien is yellow, print a message that the player earned 10 points.
else if(alien_color == "yellow"){
    console.log("the player just earned 10 points.");
}

//is the alien is red, print a message that the player earned 15 points.
else if(alien_color == "red"){
    console.log("the player just earned 15 points.");
}
else {
    console.log("please select right color")
}
//write three versions of this program, making sure
//each message is printed for the appropriate color alien.

//version 2
alien_color = "red";
if(alien_color == "green"){
    console.log("the player just earned 5 points.");
}
else if(alien_color == "yellow"){
    console.log("the player just earned 10 points.");
}
else if(alien_color == "red"){
    console.log("the player just earned 15 points.");
}
else {
    console.log("please select right color")
}
//version 3
alien_color = "yellow"
if(alien_color == "green"){
    console.log("the player just earned 5 points.");
}
else if(alien_color == "yellow"){
    console.log("the player just earned 10 points.");
}
else if(alien_color == "red"){
    console.log("the player just earned 15 points.");
}
else {
    console.log("please select right color")
}

//Exercise 28
//Stages of life

//stages of life: write an if-else chain that determines a persons stage of life.
//set a value for the variable age, and then :
//if the person is less than 2 years old, print a message that 
//the person is a baby.

let age: number = 25;
if(age<2){
    console.log("the person is a baby.")
}

//if the person is at least 2 years old but less than 4, 
//print a message that the person is a toddler.
else if(age>=2 && age<4){
    console.log("person is a toddler.")
}

//if the person is at least 4 years old but less than 13,
//print a message that the person is a kid.
else if(age>=4 && age<13){
    console.log("person is a kid.")
}

//if the person is at least 13 years old but less than 20,
//print a message that the person is a teenager.
else if(age>=13 && age<20){
    console.log("person is a teenager.")
}

//if the person is at least 20 years old but less than 65,
//print a message that the person is a adult.
else if(age>=20 && age<65){
    console.log("person is a adult.")
}

//if the person is at least 65 or older,
//print a message that the person is a elder.
else (age>=65 && age>65);{
    console.log("person is an elder.")
}

//Exercise 29
//Favorite Fruit

//favorite fruit :make a array of your favorite fruits, and 
//then write a series of independent if statements that check for certain fruits in your array .
//make a array of your three favorite fruits and call it favorite_fruits.
//write five if statements.rach should check wether a certain kind of fruit is in your array 
//is the fruit is in yout array , the if block should print a statement ,such as you really like bananas!
var favorite_fruits = ['apple', 'kiwi', 'banana'];
if (favorite_fruits.includes('apple')) {
    console.log('I really like apple!');
}
if (favorite_fruits.includes('kiwi')) {
    console.log('I really like kiwi!');
}
if (favorite_fruits.includes('grapes')) {
    console.log('I really like grapes!');
}
if (favorite_fruits.includes('banana')) {
    console.log('I really like banana!');
}
if (favorite_fruits.includes('strawberry')) {
    console.log('I really like strawberry!');
}

//Exercise 30
//Hello Admin

//30. Hello Admin: make a array of five or more usernames ,including the name 'admin'.Imagine you are writing code that will print a greeting to each other after they log in to a website.loop through the array, and print a greeting to each other:
//If the username is 'admin' , print a special greeting, such as Hello admin,would you like to see a status report?
//otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

let users : string [] =['ali','sara','safa','areeb','admin']

for(let user of users){
    if(user === "admin"){
        console.log("Hello admin,would you like to see a status report?")
    }
else{
    console.log(`Hello ${user},'thank you for logging in again'`)
}
}

//Exercise 31
//No Users

//No users:Add an if test to exercise 28 to make sure the list of users is not empty
//if the list is empty,print the message We need to find some users!


let users : string [] =['ali','sara','safa','areeb','admin']
if(users.length === 0){
  console.log("We need to find some users!")
}
//Remove all of the usernames from your array, and make sure the correct message is printed.

else{
    users = [];
    console.log("All users have been removed " + users.length);
}

//Exercise 32
//Checking Usernames

//Checking usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//Make a list of five or more usernames called current_users.
//Make another list of five usernames called new_users.Make sure one or two of the new usernames are also in the current_users list.
//Loop through the new_users list to see if each username has already been used.If it has,print a message that the person will need to enter a new username.If a username has not been used. print a message saying that the username is available
//Make sure your comparison is case insensitive.If 'John' has been used,'JOHN' should not be accepted.

let current_users: string [] = ['TaNia','ZubAir','ElSa','RubiNa','HAnia'];

let new_users: string[] = ['Sadia','TaNia','Aisha','ElSa','Sana'];

new_users.forEach(newUsername => {
    let lowercase: string = newUsername.toLowerCase();

    if(current_users.map(c_user => c_user.toLowerCase()).includes(lowercase)){
        console.log(`The username ${newUsername} is not available.Please write a different username`);
    }
    else{
        console.log(`The username ${newUsername} is available.`);
    }
})

//Exercise 33
//Ordinal Numbers

//Ordinal Numbers: Ordinal numbers indicate their position in a array,such as 1st and 2nd.Most ordinal numbers end in th, except 1,2, and 3.
//Store the numbers 1 through 9 in a array
//loop through the array
//use an if-else chain inside the loop to print the proper ordinal ending for each number.Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
let number:number[]=[1,2,3,4,5,6,7,8,9];

for(let i = 0; i < number.length; i++){
    if (number[i] == 1){
        console.log(`${number[i]}st`);
}
    else if(number[i] == 2){
        console.log(`${number[i]}nd`);
}
    else if(number[i] == 3){
    console.log(`${number[i]}rd`);
}
    else if(number[i] >= 4 && number[i] <= 9){
    console.log(`${number[i]}th`);
}
}

//Exercise 34
//Pizzas

//Pizzas:Think of at least three kinds of your favorite pizza. Store these pizza names in a array,and then use a for loop to print the name of each pizza.
//Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.For each pizza you should have one line of output containing a simple statement like i like pepperoni pizza.
//Add a line at the end of your program, outside the for loop, that states how much you like pizza.The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as i really love pizza!
let Pizzas: string[]=['pepperoni','fajita','malai boti'];

for(let Pizza of Pizzas){
    console.log(`I like ${Pizza} pizza.`);
}

console.log(`I really love pizza!`);

//Exercise 35
//Animals

//Animals:Think of atleast three different animals that have a common characteristic.Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
//Modify your program to print a statement about each animal,such as A dog would make a great pet .
//Add a line at the end of your program stating what these animals have in commom. You could print a sentence such as Any of these animals would make a great pet!
let Animals:string[]= ['cat','squirrel','dog'];
for(let Animal of Animals){
    console.log(`A ${Animal} would make a great pet.`);
}
console.log(`Any of these animal would make a great pet!`);

//Exercise 36
//T-Shirt

//T-shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it.

//Call the function

function make_shirt(size:string, text:string){
    console.log(`Creating a ${size} shirt with the message: ${text}`);
}
make_shirt('small','Sunny day');
make_shirt('medium','Sunny day');
make_shirt('large','Sunny day');

//Exercise 37
//Large Shirt

//large shirts:modify the make_shirt() function so that shirts are large by default with a message that reads I love Typescript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size:string ='Large', text:string = 'I love Typescript.'){
    console.log(`Creating a large ${size} shirt with the message :${text}`);
}
make_shirt();
make_shirt('Medium');
make_shirt('small','I love html');

//Exercise 38
//Cities

//Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in pakistan.Give the parameter for the country a default value. Call your function  for three different cities,at least one of which is not in the default country.

function describe_city(city: string, country:string = 'Default country.'){
    console.log(`${city} is in ${country}`);
  }
  describe_city('Karachi','Pakistan');
  describe_city('tokyo','England');
  describe_city('Paris');

//Exercise 39
//City Names

//City Names: Write a function  called city_country()that takes in the name of a city and its country.The function should return a string formatted like this:
//"Lahore,Pakistan"
//Call your function with at least three city_country paits, and print the value thats returned.

function city_country(city:string, country:string){
    return `${city},${country}`;
}
console.log(city_country('Karachi','Pakistan'));
console.log(city_country('Tokyo','Japan'));
console.log(city_country('Delhi','India'));

//Exercise 40
//Album

//Album:Write a function called make_album()that builds a object describing a music album.the function should take in an artist name and in aibum title,and it should return a object containing these two pieces of information.Use the function to make three dictioneries representing different albums. Print each return value to show that objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add thta value to the albums object. Make at least one new function call that includes the number of tracks an an album.
function make_album (artist:string,title:string,tracks?:number){

    const album: {artist:string, title:string,tracks?:number}={
    artist :artist,
    title:title,
    }

    if(tracks !== undefined){
    album.tracks=tracks;
    }


    return album;
    
 }

 const album1 = make_album('Artist 1','Album title 1');
 console.log(album1);

 const album2 = make_album('Artist 2','Album title 2');
 console.log(album2);

 const album3 = make_album('Artist 3','Album title 3',12);
 console.log(album3);

 //Exercise 41
 //Magicians

 //Magicians:Make a array of magician's names.Press the array to a function called show_magicians().which prints the name of each magician in the array.
let magician : string[]= ['Harry Potter','Albus Dumbledore','Hermione Granger','Ron Weasley'];

function show_magicians(magicians : string[]){

   magicians.forEach(element => {
        console.log(element)
    });
}
show_magicians(magician)

//Exercise 42
//Great Magicians

//Great Magicians:Start with a copy of your program from Exercise 39.Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician's name.Call show_magicians()to see that the list has actually been modified.

let magician : string[]= ['Harry Potter','Albus Dumbledore','Hermione Granger','Ron Weasley'];

function make_great (magicianArray: string[]){

    for(let i=0; i < magicianArray.length;i++){

       magician[i]='The Great '+ magicianArray[i]
    }

}

function show_magicians(magicians : string[]){

   magicians.forEach(element => {

        console.log(element)
    });
}
make_great(magician);
show_magicians(magician)

//Exercise 43
//Unchanged Magicians

//Unchanged magicians: Start with your work from Exercise 40.Call the function make_great()with a copy of the array of magician's names.Because the original array will be unchanged,return the new array and store it in a separate array.Call show-magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician's name.

let magician : string[]= ['Harry Potter','Albus Dumbledore','Hermione Granger','Ron Weasley'];

function copyArray(arr:string[]){

    return[...arr]

}
function make_great (magicianArray: string[]){

    for(let i=0; i < magicianArray.length;i++){

       magicianArray[i]='The Great '+ magicianArray[i]
    }
}
function show_magicians(magicians : string[]){

   magicians.forEach(element => {

        console.log(element)
    });
}
const copyMagicianArray = copyArray(magician)
make_great(copyMagicianArray);

console.log('\n\nThis is my original array:');
show_magicians(magician);

console.log('\n\nThis is my modified copy of the array:');
show_magicians(copyMagicianArray);

//Exercise 44
//Sandwiches

//Sandwiches:Write a function that accepts a array of items a person wants on a sandwich.The function should have one parameter that collects as many items as the function call provides,and it should print a summary of the sandwich that is being ordered.Call the function three times,using a different number of arguments each time.
function makeSandwich (item: string[]){
    console.log('Making your sandwich with:');

    item.forEach(element => console.log("- "+ element));

    console.log('Enjoy your sandwich !');
}

makeSandwich(['ketchup','mayonaise','cheese']);
makeSandwich(['Turkey','Bacon']);
makeSandwich(['Peanut butter','Jelly']);

//Exercise 45
//Cars

//Write a function that stores information about a car in a object. The function should always receive a manufacture and a model names.It should then accept an arbitrary number of keyword arguments.Call the function with the required information and two other name-value pairs,such as a color or an optional feature. Print the object that's returned to make sure all the information was stored correctly.


function storeCarInfo(manufacturer: string, modelName: string, ...extraOption: { [key: string]: any } [] ):object {

    const carInfo = {
        manufacturer,
        modelName,
        ...Object.assign({},...extraOption)
    }
    return carInfo;
};

let answare = storeCarInfo('Honda','Civic',{color:'Black'},{features: ['Navigation','Power window']})
console.log(answare);






































