const API_KEY = "AkUuzsjfT3RUSgB_VnMMUWqojglk7I2XkJ06JMHF5OM";
const BASE_URL = "https://api.unsplash.com";
let photos;
const bodyEl = document.querySelector("body");
const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("#search-btn");
const clearButtonEl = document.querySelector("#clear-btn");

function addClickEvent() {
  const photoElems = document.querySelectorAll("img");
  console.log(photoElems);
  for (const photoElem of photoElems) {
    photoElem.addEventListener("click", () => {
      console.log("Klick!");
    });
  }
}

function displayPhotoElem(photo) {
  console.log(photo);
  const imgElem = `<img src="${photo.urls.regular}"/>`;
  bodyEl.insertAdjacentHTML("beforeend", imgElem);
}

function displayPhotos() {
  for (const photo of photos) {
    console.log(photo);
    displayPhotoElem(photo);
  }
  addClickEvent();
}

async function getPhotos(searchQuery) {
  // CID är våran nyckel..
  const response = await fetch(
    `${BASE_URL}/search/photos?client_id=${API_KEY}&query=${searchQuery}`
  );
  console.log(response);
  const data = await response.json();
  console.log(data);
  photos = data.results;

  displayPhotos();
}

buttonEl.addEventListener("click", () => {
  const searchQuery = inputEl.value;
  getPhotos(searchQuery);
});

clearButtonEl.addEventListener("click", () => {
  window.location.reload();
});
