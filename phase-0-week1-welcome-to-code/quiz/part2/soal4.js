let word = "wow JavaScript is so cool";
let FirstWord = word.substring(0, 3);
let SecondWord = word.substring(4, 14);
let ThirdWord = word.substring(15, 17);
let FourthWord = word.substring(18, 20);
let FifthWord = word.substring(21, 25);

let FirstWordLength = FirstWord.length;
let SecondWordLength = SecondWord.length;
let ThirdWordLength = ThirdWord.length;
let FourthWordLength = FourthWord.length;
let FifthWordLength = FifthWord.length;

console.log("First word : " + FirstWord + ", with Length : " + FirstWordLength);
console.log(
  "Second word : " + SecondWord + ", with Length : " + SecondWordLength,
);
console.log("Third word : " + ThirdWord + ", with Length : " + ThirdWordLength);
console.log(
  "Fourth word : " + FourthWord + ", with Length : " + FourthWordLength,
);
console.log("Fifth word : " + FifthWord + ", with Length : " + FifthWordLength);
