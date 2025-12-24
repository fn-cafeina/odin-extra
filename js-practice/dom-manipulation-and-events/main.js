const p = document.createElement("p");
p.style.color = "red";
p.textContent = "Hey I'm red!";

const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "I'm a blue h3!";

const div = document.createElement("div");
div.style.cssText = "border: 1px solid black; background-color: pink;";

const divH1 = document.createElement("h1");
divH1.textContent = "I'm in a div";

const divP = document.createElement("p");
divP.textContent = "ME TOO!";

div.appendChild(divH1);
div.appendChild(divP);

const container = document.querySelector(".container");
container.appendChild(p);
container.appendChild(h3);
container.appendChild(div);

// const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hello World");

const btn = document.querySelector("#btn");

// btn.addEventListener("click", () => {
//   alert("Hello World");
// });

// btn.addEventListener("click", function (e) {
//   console.log(e.target);
// });

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
