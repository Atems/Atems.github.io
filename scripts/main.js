var myImage = document.querySelector('img');
//that stores a reference to the image element in myimage variable

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/milenial dad.png') {
      myImage.setAttribute ('src','images/speaking out against PC.png');
    } else {
      myImage.setAttribute ('src','images/milenial dad.png');
    }
}
/*
The above code changes the primary image on the website to the
alternate image when it is clicked.
*/

var myVariable = 'Alex';

var myVariable = document.querySelector('h1');
alert('Welcome to the Dad page!');

function multiply(num1,num2) {
  var result = num1 * num2;
  return result;
multiply(4,7);
}

document.querySelector('h1').onclick = function() {
    alert('Hello!');
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
/* 
this grabs references to the new button we added
and the heading, and stores them in variables
*/

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Being a dad is great, ' + myName;
}
//I did not undesrtand this

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Being a dad is great, ' + storedName;
}
//I did not understand this either

myButton.onclick = function() {
  setUserName();
}
/*
Finally, put the below onclick event handler on the button
so that when clicked the setUserName() function is run.
This allows the userto set a new name whenever they want by pressing the button
*/

