// write a code for linear and binary search
// Linear search function

let arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
function linearSearch(arr, target) {
  // Loop through the array
  for (let i = 0; i < arr.length; i++) {
    // If the current element is equal to the target, return its index
    if (arr[i] === target) {
      return i;
    }
  }
  // If the target is not found, return -1
  return -1;
}
console.log(linearSearch(arr, 20));


//binary  search function
let array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
function binarySearch(arr, target) {
  // Initialize the left and right pointers
  let left = 0;
  let right = arr.length - 1;
  // Loop until the left pointer is greater than the right pointer
  while (left <= right) {
    // Calculate the middle index
    let mid = Math.floor((left + right) / 2);
    // If the middle element is equal to the target, return its index
    if (arr[mid] === target) {
      return mid;
    }
    // If the middle element is greater than the target, move the right pointer to the left of the middle
    else if (arr[mid] > target) {
      right = mid - 1;
    }
    // If the middle element is less than the target, move the left pointer to the right of the middle
    else {
      left = mid + 1;
    }
  }
  // If the target is not found, return -1
  return -1;
}
console.log(binarySearch(arr, 11));




//1.map basics
let countries = new Map();


countries.set("India", "New Delhi");
countries.set("China", "Beijing");
countries.set("Japan", "Tokyo");
countries.set("Austria", "Vienna");
countries.set("Comoros", "Moroni");

console.log(countries);

//2.set duplication

let numbers = [1, 2, 3, 4, 4,5, 5, 6, 6,6,7,7];


let uniqueNumbers = new Set(numbers);


let newArray = [...uniqueNumbers];

console.log(newArray); 

//3.map operation

let map = new Map();

// Add three key-value pairs to the Map
map.set("name", "sam");
map.set("age", 30);
map.set("city", "Mumbai");

// Print the keys and values in the Map
console.log("The keys and values in the map are:");
for (let [key, value] of map) {
  console.log(key + " = " + value);
}

// Check if a specific key exists in the Map
let key = "name"; 
if (map.has(key)) {
  console.log("The map has the key: " + key);
} else {
  console.log("The map does not have the key: " + key);
}

// Remove one key-value pair from the Map
let keyToRemove = "city"; // Change this to any key you want to remove
map.delete(keyToRemove);
console.log("The key-value pair with the key: " + keyToRemove + " has been removed from the map");


//4.set set operation
// Create two Sets, one for even numbers and one for odd numbers
let evenSet = new Set([2, 4, 6, 8, 10]);
let oddSet = new Set([1, 3, 5, 7, 9]);

// Find the union of the two sets
let unionSet = new Set([...evenSet, ...oddSet]);
console.log("The union of the two sets is: " + [...unionSet].join(", "));

// Find the intersection of the two sets
let intersectionSet = new Set([...evenSet].filter(x => oddSet.has(x)));
console.log("The intersection of the two sets is: " + [...intersectionSet].join(", "));

// Find the elements that are only in the even numbers set
let evenOnlySet = new Set([...evenSet].filter(x => !oddSet.has(x)));
console.log("The elements that are only in the even numbers set are: " + [...evenOnlySet].join(", "));

// Find the elements that are only in the odd numbers set
let oddOnlySet = new Set([...oddSet].filter(x => !evenSet.has(x)));
console.log("The elements that are only in the odd numbers set are: " + [...oddOnlySet].join(", "));

// 5. map iteration

// Create a new Map object
let fruits = new Map();

// Add some fruits and their colors as key-value pairs
fruits.set("apple", "red");
fruits.set("banana", "yellow");
fruits.set("orange", "orange");
fruits.set("Mango", "Yellow");

// Loop through the Map using the for...of statement
for (let [fruit, color] of fruits) {
  // Print out each fruit's name and color
  console.log(fruit + " is " + color);
}

//  6.set size and clear
// Create a Set of integers
let set = new Set([1, 2, 3, 4, 5]);

// Print its size
console.log("The size of the set is " + set.size);

// Clear the Set
set.clear();

// Print its size again
console.log("The size of the set after clearing is " + set.size);

//7.map value update
let cityMap = new Map();

// Add some cities and their populations to the map
cityMap.set("Pune", 3.4); // in millions
cityMap.set("Mumbai", 20.4);
cityMap.set("Delhi", 30.3);

// Define a function that updates the population of a given city
function updatePopulation(city, newPopulation) {
  // Check if the city exists in the map
  if (cityMap.has(city)) {
    // Update the population value for the city
    cityMap.set(city, newPopulation);
    // Print the updated population of the city
    console.log(`The updated population of ${city} is ${newPopulation} million.`);
  } else {
    // Print an error message if the city is not found
    console.log(`The city ${city} is not in the map.`);
  }
}


//8.set contain
// Create a Set object to store the names of five programming languages
let languages = new Set(["C++", "Java", "C#", "Python", "JavaScript"]);

// Define a function that checks if a given language name exists in the Set
function checkLanguage(name) {
  // Return true if the name is in the Set, false otherwise
  return languages.has(name);
}

//9.map keys and values
let countryLanguageMap = new Map();

// Add some key-value pairs to the map
countryLanguageMap.set("India", "Hindi");
countryLanguageMap.set("China", "Mandarin");
countryLanguageMap.set("France", "French");
countryLanguageMap.set("Brazil", "Portuguese");
countryLanguageMap.set("Japan", "Japanese");

// Print out the keys of the map
console.log("The keys of the map are:");
for (let key of countryLanguageMap.keys()) {
  console.log(key);
}

// Print out the values of the map
console.log("The values of the map are:");
for (let value of countryLanguageMap.values()) {
  console.log(value);
}

//10. set remove
// Create a Set to store the names of colors
let colors = new Set(["red", "green", "blue", "yellow", "orange"]);


function removeColor(color) {
 
  if (colors.has(color)) {
  
    colors.delete(color);
  
    return `The color ${color} was removed from the Set.`;
  } else {
    
    return `The color ${color} does not exist in the Set.`;
  }
}


console.log("The original Set of colors is:");
console.log(colors);

let result = removeColor("green");
console.log(result);
console.log("The updated Set of colors is:");
console.log(colors);
