// An array is a special variable, which can hold more than one value at a time.
// Understanding the difference between let & var: It can be said that a variable declared with var is defined throughout the program (function scoped) as compared to let (which is block scoped). A function can contain many blocks.
// watch later: https://www.youtube.com/watch?v=XgSjoHgy3Rk

$( document ).ready(function() {
console.log( "ready!" );


let namesArray = ["Amy","Louie","Charlotte","Fereshteh","G","Hilary","Ilya","Liara","Jackie","Latoya","Michelle","Molly","Sarah","Shane","Stef","Teresa","Zoe","Alliah","Claire","Fereshteh","Ingo","Jean","Jenny","Joygill","Julia","Justyne","Kaeli","Kara","Liz","M.E.","Masha","Rox","Vanessa","Yatu"]

var arrayLength = (namesArray.length);



var randomName = namesArray[Math.floor(Math.random() * arrayLength)];


console.log(randomName)

$('#name').append(randomName);


for (var i = 0; i < arrayLength; i++) {
    console.log(namesArray[i]);
    $('#names').append((namesArray[i] +" "));
    //Do something
  }

});
