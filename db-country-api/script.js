const searchButton = document.querySelector("#search-btn");
const searchInput = document.querySelector("#search-input");
const clearButton = document.querySelector("#clear-btn");

clearButton.addEventListener("click", () => {
  searchInput.value = null;
});

searchButton.addEventListener("click", async () => {
  const countryArray = await getCountry();
  changeCountry(countryArray);
  searchInput.value = "";
});

async function getCountry() {
  const countryName = searchInput.value;
  const finalUrl = `https://restcountries.com/v2/name/${countryName}?fullText=true`;
  const response = await fetch(finalUrl);
  data = await response.json();
  return data;
}

function changeCountry(countries) {
  const countryFlag = document.querySelector("main article img");
  const countryName = document.querySelector("main article h2");

  countries.forEach((country) => {
    countryName.textContent = country.capital;
    countryFlag.src = country.flag;
  });
}
