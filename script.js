const quoteText = document.querySelector("#quote");
const quoteAuthor = document.querySelector(".quote-author");
const newquoteBtn = document.querySelector("#new-quote");
const tweetBtn = document.querySelector(".twitter-button");

async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";

  try {
    const response = await fetch(apiUrl);
    let apiQuotes = await response.json();
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
    quoteText.innerHTML = quote.text;
    quoteAuthor.innerHTML = quote.author.split(",")[0].trim();
  } catch (error) {
    // Catch Error here
  }
}

function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
  window.open(twitterUrl, "_blank");
}

newquoteBtn.addEventListener("click", function () {
  getQuotes();
});

tweetBtn.addEventListener("click", function () {
  tweetQuote();
});
