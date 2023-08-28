console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 1; i <= 100; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(`${i}: FIZZBUZZ`);
  } else if (i % 3 == 0) {
    console.log(`${i}: FIZZ`);
  } else if (i % 5 == 0) {
    console.log(`${i}: BUZZ`);
  }
}

//Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

console.log("=== While Loop: ===");
var i3a = 1;
while (i3a <= 100) {
  if (i3a % 2 == 1) {
    console.log(i3a);
  }
  i3a++;
}

console.log("=== While Loop: ===");
var i3b = 1;
while (i3b <= 100) {
  if (i3b % 3 == 0 && i3b % 5 == 0) {
    console.log(`${i3b}: FIZZBUZZ`);
  } else if (i3b % 3 == 0) {
    console.log(`${i3b}: FIZZ`);
  } else if (i3b % 5 == 0) {
    console.log(`${i3b}: BUZZ`);
  }
  i3b++;
}

console.log("=== Do While Loop: ===");
var i3a = 1;
do {
  if (i3a % 2 == 1) {
    console.log(i3a);
  }
  i3a++;
} while (i3a <= 100);

console.log("=== Do While Loop: ====");
var i3b = 1;
do {
  if (i3b % 3 == 0 && i3b % 5 == 0) {
    console.log(`${i3b}: FIZZBUZZ`);
  } else if (i3b % 3 == 0) {
    console.log(`${i3b}: FIZZ`);
  } else if (i3b % 5 == 0) {
    console.log(`${i3b}: BUZZ`);
  }
  i3b++;
} while (i3b <= 100);

//Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let value = Math.round(Math.random() * 500); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

// var given = 34;
// var n = 44;
for (let i = 0; i <= n; i++) {
  if (i == value) {
    console.log("Found value!");
    break;
  }
  if (i == n) {
    console.log("Did not find value");
  }
}

console.log("EXERCISE 5:\n==========\n");
// Bonus: Exercise 5: Customized FIZZBUZZ
// We already completed the FIZZBUZZ challenge.
// Now repeat the logic for the FIZZBUZZ challege with values provided in variables.

// Start with the following code:
// let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
// let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
// let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
// let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000

// Re-implement exercise 2, but use start as the initial value for i, end as the range limit in i <= end,
// and fizzDivisor and buzzDivisor as the dependent values for determining "FIZZ" and "BUZZ" print messages.

console.log(`Fizz Divisor: ${fizzDivisor}`);
console.log(`Buzz Divisor: ${buzzDivisor}`);
console.log(`Start: ${start}`);
console.log(`End: ${end}`);
console.log(`==== BEGIN! ====`);

for (let i = start; i <= end; i++) {
  if (i % fizzDivisor == 0 && i % buzzDivisor == 0) {
    console.log(`${i}: FIZZBUZZ`);
  } else if (i % 3 == 0) {
    console.log(`${i}: FIZZ`);
  } else if (i % 5 == 0) {
    console.log(`${i}: BUZZ`);
  }
}
