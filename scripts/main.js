var myImage = document.querySelector('img');
myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'imgs/one.jpg'){
		myImage.setAttribute('src','imgs/two.png');	
	} else {
		myImage.setAttribute('src', 'imgs/one.jpg');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
	var myName = prompt('Enter your name.');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Im cool, '+myName;
}

if(!localStorage.getItem('name')){
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Im cool, '+storedName;
}

myButton.onclick = function(){
	setUserName();
}


