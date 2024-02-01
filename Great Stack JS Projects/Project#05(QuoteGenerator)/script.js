const api_url = "https://api.quotable.io/random";
let quote = document.getElementById("quote");
let author = document.getElementById("author");

async function getQuote(url)
{
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);

    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

function tweet()
{
    window.open("https://twitter.com/intent/tweet?text="+quote.innerHTML +"-----by " + author.innerHTML,"Hello%20world", "Tweet Window", "width=600, height=300");
}

getQuote(api_url);