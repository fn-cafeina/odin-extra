const content = document.querySelector(".content");
const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("search-btn");
const apiKey = `7g3GdAxCg2t7oMzS98Bco0kTYOwTumGNFyC6hXM8ezgTrztVnwzbYjd260ONDdDv`;

searchBtn.addEventListener("click", (event) => {
  event.preventDefault();

  if (searchInput.value) {
    fetch(
      `https://api.klipy.com/api/v1/${apiKey}/gifs/search?q="${searchInput.value}"`,
    )
      .then((res) => res.json())
      .then((res) => {
        const data = res.data.data;

        if (!data.length) {
          alert("No GIFs found, try another search.");
          return;
        }

        const gif =
          data[Math.floor(Math.random() * data.length)].file.md.gif.url;

        const image = document.createElement("img");
        image.src = gif;
        content.innerHTML = "";
        content.appendChild(image);
      });
  } else {
    alert("Please enter something before searching.");
  }
});
