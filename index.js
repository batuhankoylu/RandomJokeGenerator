// HTML elementlerini seçme
const jokeText = document.getElementById("text");
const randomBtn = document.getElementById("btn");
const emojiItem = document.getElementById("emoji-img");

// Joke API'nin URL'si
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

// Emoji listesi
const emojiList = [
  {
    value: "&#129322;",
    label: "Dark",
  },
  {
    value: "&#128516;",
    label: "Misc",
  },
  {
    value: "&#128525;",
    label: "Programming",
  },
  {
    value: "&#128151;",
    label: "Pun",
  },
  {
    value: "&#128512;",
    label: "Spooky",
  },
  {
    value: "&#128517;",
    label: "Christmas",
  },
];

// Random şaka hazır olduğunda çalışacak fonksiyon
const readyJoke = async () => {
  try {
    // Joke API'den şaka al
    const response = await fetch(url);
    const data = await response.json();

    // Şakayı metin alanına yaz
    jokeText.textContent = data.joke;

    // Şaka kategorisine göre emojiyi bul
    const selectEmoji = emojiList.find(emoji => emoji.label === data.category);
    
    if (selectEmoji) {
      // Eğer emoji bulunduysa, emoji alanına yaz
      emojiItem.innerHTML = selectEmoji.value;
    } else {
      // Eğer emoji bulunamazsa, emoji alanını boşalt
      emojiItem.innerHTML = "&#129322;";
    }
  } catch (error) {
    console.error("Şaka alınırken bir hata oluştu:", error);
  }
};

// Random butonuna tıklandığında readyJoke fonksiyonunu çağır
randomBtn.addEventListener("click", readyJoke);
