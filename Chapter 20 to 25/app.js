// Nested for loops
for (let i = 1; i <= 2; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log("Row " + i + " Column " + j);
  };
}

for (let i = 1; i <= 3; i++) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "*";
  };
  console.log(stars);
}

//Changing case

let word = "Programming";
console.log(word.length);

let word1 = "Programming";
console.log(word1.length);

// Strings finding segments

let sentence = "I am learning JavaScript";
console.log(sentence1.indexOf("learning"));


let sentence1= "Hello world"
console.log(sentence.includes("world"));


// Strings finding a character at a location

let name = "Faizan"
console.log(name.charAt(0));

let name1 = "Faizan"
console.log(name[3]);

// Strings replacing characters

let text = "I like tea";
console.log(text.replace("tea" , "coffee"));

let text1 = "apple apple";
console.log(text1.replaceAll("apple", "mango"));