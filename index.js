const jokeText = document.getElementById("text");
const randomBtn = document.getElementById("btn");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let readyJoke = () => {
  fetch(url)
  .then((data) => data.json()
  .then((item) => jokeText.textContent=`${item.joke}`));
  
};
randomBtn.addEventListener("click", readyJoke);