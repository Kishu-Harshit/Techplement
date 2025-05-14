const quote= document.getElementById("quote");
const author= document.getElementById("author");
const api_url1="https://thequoteshub.com/api/";

async function getDailyQuote(url)
{
    const response = await fetch(url);
    var data= await response.json();
    console.log(data);
    author.innerHTML= "-"+data.author;
    quote.innerHTML= data.text;
}

getDailyQuote(api_url1);

let quotesData = [];

  fetch('quotes.json')
    .then(res => res.json())
    .then(data => quotesData = data)
    .catch(err => console.error("Failed to load quotes.json", err));
    document.getElementById("searchInput").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    searchAuthor();
  }
});

function searchAuthor() {
    const query = document.getElementById("searchInput").value.trim().toLowerCase();
    const resultDiv = document.getElementById("sear");
      resultDiv.innerHTML = '';

      //if (!query) return resultDiv.innerText = "Please enter an author name.";

      const author = quotesData.find(entry => entry.author.toLowerCase().includes(query));

      if (author) {
        resultDiv.innerHTML = `<h2 id="daily">Quotes by ${author.author}:</h2>` +
          author.quotes.map(q => `<div id="quote" class="quote">"${q}"</div>`).join('');
      } else {
        resultDiv.innerText = "Author not found.";
      }
  };