// An array is a special variable, which can hold more than one value at a time.

let namesArray = ['Kevin','McCoy','Emily','Frederic','Alisha','Ashli','Simon','Ty','Fiona','Prismo','Sammy','Caroline','Francesca','Karl','Esther','Irene','Martin','Yanxin','Katrina','Kiana'];

let n = Math.floor(Math.random() * namesArray.length)
let randomName = namesArray[n];

console.log(randomName);


let arrayAsString = namesArray.join(', ');
let sortedArrayAsString = namesArray.sort().join(', ');


//// Randomly Shuffling the Array
//// Fish Yates Shuffle: https://www.youtube.com/watch?v=tLxBwSL3lPQ

// function randomArrayShuffle(array) {
//   var currentIndex = array.length, temporaryValue, randomIndex;
//   while (0 !== currentIndex) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }
//   return array;
// }
// console.log(randomArrayShuffle(namesArray));
//
// let shuffledArrayAsString = randomArrayShuffle(namesArray).join(', ');

$("#name").html(randomName);

$("#names").html(arrayAsString);

$("#sortedNames").html(sortedArrayAsString);

// $("#shuffledNames").html(shuffledArrayAsString);
