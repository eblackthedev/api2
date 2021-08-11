const url =
  "https://api.giphy.com/v1/gifs/random?api_key=tpLfDfkzQibyv5YLr7FRGrVo0RrUsTXY&tag=&rating=g";

let image = document.querySelector("img");
let button = document.querySelector("button");
button.addEventListener("click", randomGif);

function randomGif() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayResults(data);
    });
}

// randomGif();

function displayResults(gif) {
  console.log(gif.data.images["downsized"]["url"]);
  image.src = gif.data.images["downsized"]["url"];
}
