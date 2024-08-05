// today tasks

/* 1. Create a function that reverses an array. Start small here and work your way up. Begin with an array of 5 numbers, and then try your program with a larger array to verify its success. */
// Function to reverse an array
function reverseArray(arr) {
    return arr.slice().reverse(); 
}
const array5 = [1, 2, 3, 4, 5];
const reversedArray5 = reverseArray(array5);
console.log("Reversed array of 5 numbers:", reversedArray5);

const arrayLarge = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const reversedArrayLarge = reverseArray(arrayLarge);
console.log("Reversed array of 10 numbers:", reversedArrayLarge);



/* 2. Create a function that filters out negative numbers. In this challenge, you’ll have a function that takes an array as an input and returns an array. But if all goes according to plan, it’ll remove the negative numbers. This is another example of a task that’ll be useful when combing through data and looking for clever ways to eliminate “bad data.”*/
function filterOutNegatives(arr) {
    return arr.filter(number => number >= 0); 
}
let exampleArray = [10, -5, 23, -12, 0, 45, -1];
console.log("Original array:", exampleArray);
console.log("Filtered array (no negatives):", filterOutNegatives(exampleArray));



/* 3. Return the number of vowels in a string. Create a function that’ll return an integer of the number of vowels found in a string. This is a great way to practice determining the features of a dataset. If you use JavaScript later in your career, you’ll be well-prepared to determine what datasets (or just strings) consist of. */
// Function to count the number of vowels in a string
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++; 
        }
    }
    return count; 
}
let exampleString = "Hello, World!";
console.log("Original string:", exampleString);
console.log("Number of vowels:", countVowels(exampleString));



/* 4. Check if a string is a palindrome. A palindrome is a word, phrase, number, or other sequences of characters that reads the same forward and backward (like the words “kayak,” “mom,” “radar,” and “refer”). Create a function that takes a string as input and returns a Boolean indicating whether the string is a palindrome. Test your function with different strings to ensure it works correctly. */
// Function to check if a string is a palindrome
function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}
console.log("Is 'A man, a plan, a canal, Panama' a palindrome?", isPalindrome('A man, a plan, a canal, Panama'));
console.log("Is 'hello' a palindrome?", isPalindrome('hello'));
console.log("Is 'radar' a palindrome?", isPalindrome('radar'));
console.log("Is '12321' a palindrome?", isPalindrome('12321'));
console.log("Is 'No lemon, no melon' a palindrome?", isPalindrome('No lemon, no melon'));



/* 5. Write a JavaScript program to check whether two given integer values are in the range 50 - 99 (inclusive). Return true if either of them falls within the range. */
// Function to check if either of two integers is within the range 50 - 99
function isInRange(num1, num2) {
    const lowerBound = 50;
    const upperBound = 99;
    return (num1 >= lowerBound && num1 <= upperBound) || (num2 >= lowerBound && num2 <= upperBound);
}
console.log("Are 45 and 55 in range?", isInRange(45, 55)); // true
console.log("Are 100 and 30 in range?", isInRange(100, 30)); // false
console.log("Are 75 and 85 in range?", isInRange(75, 85)); // true
console.log("Are 49 and 50 in range?", isInRange(49, 50)); // true
console.log("Are 48 and 98 in range?", isInRange(48, 98)); // true

