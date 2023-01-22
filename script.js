var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// console.log(css);
// console.log(color1);
// console.log(color2);
function setGradient(){
	body.style.background = "linear-gradient(to right, "+ color1.value +","+ color2.value +")";
	css.textContent = body.style.background + ";"
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

//Alternatively you can add this function as an oninput in the HTML:
//in line 9 and 10:
// <input oninput="setGradient()" class="color1" type="color" name="color1" value="#00ff00">
// <input oninput="setGradient()" class="color2" type="color" name="color1" value="#ff0000">

