
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


/*
Challenge 7: countChar(str, char)

Pseudocode:
1. Set count to zero.
2. Convert the string and target character to lowercase.
3. Loop through each character in the string.
4. If the current character matches the target, increase count.
5. Return count.
*/

function countChar(str, char) {
  let count = 0;
  const text = str.toLowerCase();
  const target = char.toLowerCase();

  for (let i = 0; i < text.length; i++) {
    if (text[i] === target) {
      count++;
    }
  }

  return count;
}

// Test 1: Repeated character
console.log(countChar("Banana", "a")); // 3

// Test 2: Case-insensitive counting
console.log(countChar("Hello", "L")); // 2

// Test 3: Character not found
console.log(countChar("Kigali", "z")); // 0

// Test 4: Edge case — empty string
console.log(countChar("", "a")); // 0



/*
Challenge 8: isPalindrome(str)

Pseudocode:
1. Create an empty string called cleaned.
2. Loop through every character in the input.
3. Keep only letters and numbers, converting them to lowercase.
4. Reverse the cleaned string using a loop.
5. Return true if both strings are equal; otherwise return false.
*/

function isPalindrome(str) {
  let cleaned = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();

    if (
      (char >= "a" && char <= "z") ||
      (char >= "0" && char <= "9")
    ) {
      cleaned += char;
    }
  }

  let reversed = "";

  for (let i = cleaned.length - 1; i >= 0; i--) {
    reversed += cleaned[i];
  }

  return cleaned === reversed;
}

// Test 1: Palindrome with mixed case
console.log(isPalindrome("Madam")); // true

// Test 2: Spaces and punctuation
console.log(isPalindrome("A man, a plan, a canal: Panama!")); // true

// Test 3: Not a palindrome
console.log(isPalindrome("hello")); // false

// Test 4: Edge case — empty string
console.log(isPalindrome("")); // true
