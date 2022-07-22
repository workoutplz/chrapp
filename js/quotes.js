const quotes = [
  {
    quote: "화이팅",
    author: "이원준",
  },
  {
    quote: "퐈이팅!!!",
    author: "김지섭",
  },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const rIndex = Math.floor(Math.random()*quotes.length);

const todayQuote = quotes[rIndex];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;