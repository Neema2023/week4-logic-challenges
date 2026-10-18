
/*
Challenge 13: sumTo(n)

Pseudocode:
1. If n is less than 1, return 0.
2. Create a variable total and set it to 0.
3. Use a loop from 1 to n.
4. Add each number to total.
5. Return total.

Comparison:
The loop is easy to follow and practise iteration.
The formula n * (n + 1) / 2 is shorter and faster.
The loop helps us understand how iteration works.
*/

// Solution 1: Using a loop
function sumTo(n) {
  if (n < 1) {
    return 0;
  }

  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
}

// Tests for the loop solution
console.log(sumTo(5));  // 15
console.log(sumTo(1));  // 1
console.log(sumTo(10)); // 55
console.log(sumTo(0));  // Edge case: 0

/*
Pseudocode for sumToFormula(n):
1. If n is less than 1, return 0.
2. Calculate n * (n + 1) / 2.
3. Return the result.
*/

// Solution 2: Using a formula
function sumToFormula(n) {
  if (n < 1) {
    return 0;
  }

  return n * (n + 1) / 2;
}

// Tests for the formula solution
console.log(sumToFormula(5));  // 15
console.log(sumToFormula(1));  // 1
console.log(sumToFormula(10)); // 55
console.log(sumToFormula(0));  // Edge case: 0

// Compare both solutions
console.log(sumTo(5) === sumToFormula(5));   // true
console.log(sumTo(10) === sumToFormula(10)); // true



/*
Challenge 14: isPrime(n)

Pseudocode:
1. If n is less than 2, return false.
2. Loop from 2 while i * i is less than or equal to n.
3. If n is divisible by i, return false.
4. If no divisor is found, return true.

Comparison:
Checking divisors only up to the square root is faster
than checking every number up to n.
Using i * i <= n avoids needing Math.sqrt(n).
*/

function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

// Test 1: Prime number
console.log(isPrime(7)); // true

// Test 2: Composite number
console.log(isPrime(9)); // false

// Test 3: Smallest prime number
console.log(isPrime(2)); // true

// Test 4: Edge case — one
console.log(isPrime(1)); // false

// Test 5: Negative number
console.log(isPrime(-5)); // false


/*
Challenge 15: printPyramid(rows)

Pseudocode:
1. If rows is less than or equal to zero, return.
2. Loop from row 1 to rows.
3. For each row, create an empty string.
4. Add stars to the string: 2 * row - 1 stars.
5. Print the string.
*/

function printPyramid(rows) {
  if (rows <= 0) {
    return;
  }

  for (let row = 1; row <= rows; row++) {
    let stars = "";

    for (let col = 1; col <= 2 * row - 1; col++) {
      stars += "*";
    }

    console.log(stars);
  }
}

// Test 1: Four rows
console.log("Test 1:");
printPyramid(4);

// Test 2: One row
console.log("Test 2:");
printPyramid(1);

// Test 3: Two rows
console.log("Test 3:");
printPyramid(2);

// Test 4: Edge case — zero rows
console.log("Test 4:");
printPyramid(0);



/*
Challenge 16: fibonacci(n)

Pseudocode:
1. If n is less than or equal to zero, return an empty string.
2. Create an empty result string.
3. Start with a = 0 and b = 1.
4. Loop n times.
5. Add a to the result, adding a comma between numbers.
6. Calculate the next number as a + b.
7. Update a and b.
8. Return the result string.
*/

function fibonacci(n) {
  if (n <= 0) {
    return "";
  }

  let result = "";
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    if (i > 0) {
      result += ", ";
    }

    result += a;

    const next = a + b;
    a = b;
    b = next;
  }

  return result;
}

// Test 1: First eight numbers
console.log(fibonacci(8)); // 0, 1, 1, 2, 3, 5, 8, 13

// Test 2: First three numbers
console.log(fibonacci(3)); // 0, 1, 1

// Test 3: One number
console.log(fibonacci(1)); // 0

// Test 4: Edge case — zero
console.log(fibonacci(0)); // ""



/*
Challenge 17: guessingGameSimulator(secret)

Pseudocode:
1. Set low to 1 and high to 100.
2. Set guesses to 0.
3. While low is less than or equal to high:
   a. Guess the middle number.
   b. Increase guesses and print the guess.
   c. If the guess equals secret, return guesses.
   d. If the guess is too low, move low above the guess.
   e. Otherwise, move high below the guess.
4. Return -1 if secret is outside the allowed range.
*/

function guessingGameSimulator(secret) {
  if (!Number.isInteger(secret) || secret < 1 || secret > 100) {
    return -1;
  }

  let low = 1;
  let high = 100;
  let guesses = 0;

  while (low <= high) {
    const guess = Math.floor((low + high) / 2);
    guesses++;

    console.log("Guess:", guess);

    if (guess === secret) {
      console.log("Found in", guesses, "guesses");
      return guesses;
    }

    if (guess < secret) {
      low = guess + 1;
    } else {
      high = guess - 1;
    }
  }

  return -1;
}

// Test 1: Secret is 50
console.log("Test 1:", guessingGameSimulator(50));

// Test 2: Secret is 1
console.log("Test 2:", guessingGameSimulator(1));

// Test 3: Secret is 100
console.log("Test 3:", guessingGameSimulator(100));

// Test 4: Edge case — outside the range
console.log("Test 4:", guessingGameSimulator(0)); // -1
