//1. Find the last elements

let arr1 = [3, 7, 34, 90, 12];
let arr2 = [true, "green", "where", 12, 56];
let lastElementOfArr1 = arr1.find((value, index) => index === arr1.length - 1);
let lastElementOfArr2 = arr2.find((value, index) => index === arr2.length - 1);
console.log(lastElementOfArr1); 
console.log(lastElementOfArr2); 



//2. Join array elements into string

let myPets = ["Cow", "Bird", "Snake", "Dog"];
let myPetsString = myPets.join(", ");
console.log({myPetsString});



//3. Sort array items

let arr3 = [-5, 9, 5, 3, 2, -3, 6, 8, 4, 1];
arr3.sort((a, b) => a - b);
console.log(arr3);



//4. Removing duplicates


let arr = ["boy", "man", "girl", "school", "girl", "woman"];
let arrayOfDuplicate = arr.filter((item, index) => arr.indexOf(item) !== index);
console.log( `Array that might have duplicates:`, arr);
console.log("Array with duplicates only:", [...new Set(arrayOfDuplicate)]);



//5. Search for a word in an array

let arr5 = ["the", "way", "x", 4];
let wordToSearch = "food";
let result = arr5.map(item => (item === wordToSearch ? item : null)).filter(Boolean)[0] || "the search word was not found";
console.log(result);
console.log({wordToSearch});



//6. Sort the string


let toBeSorted = "renniw";
let sortedString = toBeSorted.split('').sort().join('');
console.log({sortedString}); 




//7. Inserting tomamto in the middle


let fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple", "Strawberry", "Watermellon", "Kiwi", "Avocado"];
fruits.splice(5, 0, "Tomato");
console.log(fruits); 