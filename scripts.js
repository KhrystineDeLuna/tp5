window.onload = function () {
  document.querySelector("#recipeName").style.fontSize = "2.75em";
};

// recipe name click function //
browniebites = document.querySelector("#recipeName");
recipeName.onclick = function () {
  browniebites.classList.toggle("clicked");
};


// new HTML in dom //
x = document.getElementById("enjoy");
x.innerHTML = "Enjoy Righteously!";
x.style.fontSize = '1.75em';
x.style.fontFamily = 'Seymour One';
x.style.textAlign = 'center';
