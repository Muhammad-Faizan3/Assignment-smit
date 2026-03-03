// For loops
for (let i = 1; i <= 5; i++) {
  console.log("Number " + i);
}

let sum = 0
for (let i = 1; i <= 5; i++) {
  sum += i
}
console.log(sum);

// For loops: flags Booleans array length and breaks

let numbers = [2, 4, 6 ,8 ,10];
let found = false
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 6) {
    found = true
    break
  };
}
console.log(found)

let fruits = ["apple", "banana", "mango" ,"orange"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
  if (fruits[i] === "mango") {
    console.log("Found mango stopping loop")
    break;
  };
}
// Nested for loops

for (let i = 1; i <= 2; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log("Row " + i + " Column " + j)
  };
};

for (let i = 1; i <= 3; i++) {
  let stars = ""
  for (let j = 1; j <= i; j++) {
    stars += "*"
  };
  console.log(stars);
};