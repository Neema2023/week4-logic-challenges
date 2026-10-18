
/*
Challenge 6: reverseString(str)

Pseudocode:
1. Create an empty string called reversed.
2. Start a loop at the last character of the input.
3. Move backward until the first character.
4. Add each character to reversed.
5. Return reversed.

Comparison:
A loop makes each step clear and does not need extra array methods.
Using split(), reverse(), and join() is shorter,
but the loop helps us practise string logic.
*/

function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

// Test 1: Normal string
console.log(reverseString("hello")); // olleh

// Test 2: Another string
console.log(reverseString("Kigali")); // ilagiK

// Test 3: One character
console.log(reverseString("A")); // A

// Test 4: Edge case — empty string
console.log(reverseString("")); // ""
