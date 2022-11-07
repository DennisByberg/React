const btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  const base = `https://api.punkapi.com/v2/beers?{brewed_after=01-2015`;

  const resp = await fetch(base);
  const data = await resp.json();

  console.log(data);
  data.forEach((beer) => {
    let el = `
	<article>
	<img src="${beer.image_url}" alt="beer">
	<h2>${beer.name}</h2>
	<p>${beer.description}</p>
	<p>${beer.abv}%</p>
	</article>	
	`;
    document.querySelector("main").insertAdjacentHTML("beforeend", el);
  });
});
