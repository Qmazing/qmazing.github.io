var Button1 = document.getElementById("Button1");
var lvlText = document.getElementById("lvlText");
var glblText = document.getElementById("glblText");
var resetBtn = document.getElementById("resetBtn");
var lvl = localStorage.getItem("localLvl");

if (lvl == "") {
	lvl = 0;
}

lvlText.innerHTML = "Level " + lvl;
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
	lvlText.innerHTML = "Level " + lvl;
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