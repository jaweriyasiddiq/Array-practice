//////////////////////////////ARRAYS///////////////
//SIMPLE ARRAY OF STRING
var colors = ["red", "yellow", "pink", "blue", "white"];
//SIMPLE ARRAY OF NUMBERS
var evenNumbers = [2, 4, 6, 8, 10];
//ARRAY WITH TYPE DECLEARATION
//STRING
var vahicle = ["car", "bus", "truck", "motercycle", "airoplane"];
//NUMBERS
var oddNumbers = [1, 3, 5, 7, 9];
//ACESSING
//WHOLE ARRAY
console.log(colors);
//INDEX
console.log(vahicle[2]);
console.log(evenNumbers[4]);
//LENGTH
console.log(oddNumbers.length);
//TYPES OF ARRAY
//SINGLE TYPE ARRAY
var sports = ["football", "baseball", "basketball"];
console.log(sports);
//MULTIPLE TYPE ARRAY
var person = [1, "jaweriya", 2, "hello", 3, "world"];
console.log(person[3]);
//NESTED ARRAY
//WITH STRING
var NestedArray2 = ["lion", "elephant", ["tiger", "giraffe", "kangroo"]];
console.log(NestedArray2[2][0]);
//REPLACEMENT IN ARRAY
var teacher = ["Ameen Alam", "Humzah syed", "Manaheeljameel"];
teacher[1] = "Humza Alvi";
console.log(teacher);
//METHODS IN ARRAY
//1.INDEXOF()
//For getting index of given element
var fruits = ["apple", "mango", "banana", "pine apple", "grapes", "cherry"];
var GetIndex = fruits.indexOf("mango");
console.log(GetIndex);
//2.PUSH()
//To add element in end of array
var fruit1 = ["apple", "mango", "banana", "pine apple", "grapes", "cherry"];
fruit1.push("strawberry");
console.log(fruit1);
//3.POP
//To remove last element of array
var fruit2 = ["apple", "mango", "banana", "pine apple", "grapes", "cherry"];
fruit2.pop();
console.log(fruit2);
//4.SHIFT
//to remove first element of array
var fruit3 = ["apple", "mango", "banana", "pine apple", "grapes", "cherry"];
fruit3.shift();
console.log(fruit3);
//5.UNSHIFT
//To add element in starting of array
var fruit4 = ["apple", "mango", "banana", "pine apple", "grapes", "cherry"];
fruit4.unshift("orange");
console.log(fruit4);
//6.SPLICE
var fruit5 = ["apple", "mango", "banana", "pine apple", "grapes", "cherry"];
fruit5.splice(2, 2, "guava");
console.log(fruit5);
//7.SLICE
var fruit6 = ["apple", "mango", "banana", "pine apple", "grapes", "cherry"];
var result = fruit6.slice(0, 3);
console.log(result);
