var animals = ["dog", "elephant", "dragon", "monkey"];

function loadAnimals(){
	document.getElementById("animals").innerHTML = animals;
}

function myFunction(){
	var animal = prompt("What  is your favorite animal?");
	animals[animals.length] = animal;
	document.getElementById("animals").innerHTML = animals;
}