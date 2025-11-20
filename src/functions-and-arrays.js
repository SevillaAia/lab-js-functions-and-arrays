// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if(num1 > num2){
        return num1;
    }else{
        return num2;
    }
}

console.log(maxOfTwoNumbers(5,10));
// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
 if(words.length === 0){
    return null;
 }
 let longestWord="";
 for (let i=0; i<words.length; i++){
    const currentWord = words[i];
    if (currentWord.length > longestWord.length) {
      longestWord = currentWord;
      console.log(longestWord);
    } 
  }
  return longestWord;
}
console.log(findLongestWord(words));

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum = 0;
    for (let i=0; i < numbers.length; i++){
            sum += numbers[i]
    }
  return sum
}
console.log(sumNumbers(numbers));

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2){
    if(numbers2.length === 0){
        return 0
    }
    let sum = 0;
    for (let i=0; i < numbers2.length; i++){
            sum += numbers2[i]
    }  
    return sum / numbers2.length;
}
console.log(averageNumbers(numbers2));

// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(array, wordNotExist) {
    if (array.length === 0) return null;
    return array.includes(wordNotExist);
}
console.log(doesWordExist(words2, "truth"));