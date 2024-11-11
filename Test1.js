var Button1 = document.getElementById("Button1");
var searchText = document.getElementById("searchText");
var timer = document.getElementById("timer");
var myForm = document.getElementById("myForm");
var inputBox = document.getElementById("inputBox");
var submitButton = document.getElementById("submitButton");
var searchAgain = document.getElementById("searchAgain");
var resetBtn = document.getElementById("resetBtn");
var lvl = localStorage.getItem("localLvl");
var timeLeft = localStorage.getItem("timeLeft");
var searchDone = localStorage.getItem("searchDone");
var searchTerm = localStorage.getItem("searchTerm");

if (lvl == "") {
	lvl = 0;
}

if (timeLeft == "") {
	timeLeft = 0;
}

if (searchDone == "") {
	searchDone = 0;
}

searchResults1.classList.remove("Appear");
searchResults1.classList.add("Disappear");

searchResults2.classList.remove("Appear");
searchResults2.classList.add("Disappear");

searchAgain.classList.remove("Appear");
searchAgain.classList.add("Disappear");	

timer.classList.remove("Appear");
timer.classList.add("Disappear");	

inputBox.classList.remove("Disappear");
inputBox.classList.add("Appear");

submitButton.classList.remove("Disappear");
submitButton.classList.add("Appear");



function returnResults() {
	searchResults1.innerHTML = "Search results for:  " + searchTerm;
	if (searchTerm == "James Duncan" || searchTerm == "Jimmy Duncan" || searchTerm == "Jim Duncan") {
		searchResults2.innerHTML = "17/06/2019 - Public Intoxication, 1 count<br><br>23/02/2022 - DUI, 0.12 BAC";
	}

	else if (searchTerm == "Dan Hawthorne" || searchTerm == "Daniel Hawthorne") {
		searchResults2.innerHTML = "22/09/2016 - Suspected for assisting the operation an illegal gambling ring - unconvicted<br><br>04/11/2018 - Successfully breached National Financial Records and informed authorities, asking for $50k as thanks (rejected)";
	}

	else if (searchTerm == "Petrov Ivanovich" || searchTerm == "Ivanovich") {
		searchResults2.innerHTML = "Petrov Ivanovich, known among associates as simply 'Ivanovich'.<br><br>Suspected mob affiliation and involvement with corrupt cops.<br><br>Unconvicted on all counts, including robbery, arson, second and third degree murders, fraud, forgery, possession and distribution of a variety of class 1 narcotics, petty theft and tax evasion.";
	}

	else {
		searchResults2.innerHTML = "No Records Found";
	}

	timer.classList.remove("Appear");
	timer.classList.add("Disappear");

	searchResults1.classList.remove("Disappear");
	searchResults1.classList.add("Appear");

	searchResults2.classList.remove("Disappear");
	searchResults2.classList.add("Appear");

	searchAgain.classList.remove("Disappear");
	searchAgain.classList.add("Appear");

	searchText.classList.remove("Appear");
	searchText.classList.add("Disappear");
}

onSubmit = function () {
	searchTerm = document.getElementById("inputBox").value;
	localStorage.setItem("searchTerm", searchTerm);
	myForm.reset();
	searchText.innerHTML = "Searching database for:   " + searchTerm + "...";
	timeLeft = 900;
	localStorage.setItem("timeLeft", timeLeft);

	timer.classList.remove("Disappear");
	timer.classList.add("Appear");

	inputBox.classList.remove("Appear");
	inputBox.classList.add("Disappear");

	submitButton.classList.remove("Appear");
	submitButton.classList.add("Disappear");

	var x = setInterval(function() {
		var minutes = Math.floor(timeLeft / 60);
		var seconds = Math.floor(timeLeft % 60);
		timer.innerHTML = "Time remaining: " + minutes + " minutes and " + seconds + " seconds";

		timeLeft = timeLeft - 1;
		localStorage.setItem("timeLeft", timeLeft);

		if (timeLeft < 0) {
			clearInterval(x);
			returnResults();
		}
	}, 1000);
} 

if (timeLeft > 0) {
	timer.classList.remove("Disappear");
	timer.classList.add("Appear");

	inputBox.classList.remove("Appear");
	inputBox.classList.add("Disappear");

	submitButton.classList.remove("Appear");
	submitButton.classList.add("Disappear");

	searchText.innerHTML = "Searching database for:   " + searchTerm + "...";

	var x = setInterval(function() {
		var minutes = Math.floor(timeLeft / 60);
		var seconds = Math.floor(timeLeft % 60);
		timer.innerHTML = "Time remaining: " + minutes + " minutes and " + seconds + " seconds";

		timeLeft = timeLeft - 1;
		localStorage.setItem("timeLeft", timeLeft);


		if (timeLeft < 0) {
			clearInterval(x);
			returnResults();
		}
	}, 1000);
}

searchAgain.onclick = function() {
	searchResults1.classList.remove("Appear");
	searchResults1.classList.add("Disappear");

	searchResults2.classList.remove("Appear");
	searchResults2.classList.add("Disappear");

	searchAgain.classList.remove("Appear");
	searchAgain.classList.add("Disappear");	

	inputBox.classList.remove("Disappear");
	inputBox.classList.add("Appear");

	submitButton.classList.remove("Disappear");
	submitButton.classList.add("Appear");	

	searchText.classList.remove("Disappear");
	searchText.classList.add("Appear");

	searchText.innerHTML = "Welcome to the National Crime and Criminal Database";
}
/*




glblText.innerHTML = "Global Level " + lvl;
	
if (lvl > 0) {
	Button1.classList.add("Up");
	lvlText.classList.add("Appear");
}
	
if (lvl > 9) {
	lvlText.classList.add("Left");
	glblText.classList.add("Appear");
	resetBtn.classList.add("Appear");
}

Button1.onclick = function() {
	lvl++;
	glblText.innerHTML = "Global Level " + lvl;
	
	if (lvl == 1) {
		Button1.classList.add("Up");
		lvlText.classList.add("Appear");
	}
	
	if (lvl == 10) {
		lvlText.classList.add("Left");
		glblText.classList.add("Appear");
		resetBtn.classList.add("Appear");
	}
	
	localStorage.setItem("localLvl", lvl);
}

resetBtn.onclick = function() {
	lvl = 0;
	localStorage.setItem("localLvl", lvl);
	Button1.classList.remove("Up");
	lvlText.classList.remove("Appear", "Left");
	glblText.classList.remove("Appear");
	resetBtn.classList.remove("Appear");
}

*/