window.onload = function () {
  document.querySelector("#recipeName").style.fontSize = "2.75em";
};

// recipe name click function //
browniebites = document.querySelector("#recipeName");
recipeName.onclick = function () {
  browniebites.classList.toggle("clicked");
};


// DOM element addition //
x = document.getElementById("enjoy");
x.innerHTML = "Stay tuned to this space for other righteous treats!";
x.style.fontSize = '1.75em';
x.style.fontFamily = 'Seymour One';
x.style.textAlign = 'center';


 /* dissapearing lists */
c1 = document.querySelector("#column1");
c1.onclick = function () {
  c1.classList.toggle("clicked");
};

c2 = document.querySelector("#column2");
c2.onclick = function () {
  c2.classList.toggle("clicked");
};

c3 = document.querySelector("#column3");
c3.onclick = function () {
  c3.classList.toggle("clicked");
};