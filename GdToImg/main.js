let form = document.querySelector("form");
let input = document.querySelector("input");
let output = document.querySelector(".output");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let iV = input.value;
  let img_id = iV.slice(32, 65);

  output.value += img_id;
  input.value = " ";
});

output.addEventListener("click", () => {
  navigator.clipboard.writeText(output.value);
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
});
