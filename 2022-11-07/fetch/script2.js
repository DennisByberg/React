/* const base = "https://swapi.dev/api";
const route = "people";
const id = 4;

const url = `${base}/${route}/${id}`;
console.log(url);

async function fetchData() {
  // anropa servern och vänta på svar du
  const resp = await fetch(url);
  const data = await resp.json();
  // logga svaret
  console.log(data);
}

fetchData();
*/

const btn = document.querySelector("button");
const main = document.querySelector("main");
btn.addEventListener("click", async function () {
  try {
    const base = "https://swapi.dev/api";
    const resource = document.querySelector("select").value;
    const id = document.querySelector("#input-number").value;
    console.log(resource);
    console.log(id);
    const url = `${base}/${resource}/${id}`;
    main.innerHTML = "Loading...";
    const data = await fetchData(url);
    console.log(data);
    updateDOM(data);
  } catch (err) {
    console.error("WHOPS!!!", err);
    main.innerHTML = err;
  }
});

async function fetchData(url) {
  // bygga ihop url-en.
  const resp = await fetch(url);
  const data = await resp.json();
  console.log(data);
  if (data.detail === "Not found") {
    throw Error(data.detail);
  }
  return data;
}

function updateDOM(data) {
  main.innerHTML = "";
  let template = "";
  if (data.hair_color) {
    console.log("It's a person!");

    template = `<article>
	<h1>${data.name}</h1>
	<p>Längd: ${data.height}</p>
	</article>`;
  }

  if (data.diameter) {
    console.log("It's a planet!");

    template = `<article>
	<h1>${data.name}</h1>
	<p>${data.diameter}</p>
	</article>
	`;
  }
  if (data.passengers) {
    console.log("Ship!");
    template = `<article>
	<h1>${data.name}</h1>
	<p>${data.model}</p>
	</article>
	`;
  }
  main.insertAdjacentHTML("beforeend", template);
}
