/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

  // 
  // create an app that displays random famous quotes each time a button is clicked.

/*** 
* Array of Objects
***/
const quotes = [ 
  {
    quote:'Because every single one of us has something to say to others, something that deserves to be celebrated or forgiven by others.',
    source:'Eduardo Galeano',
    citation:'The Book of Embraces',
    year:'1992' 
},
{
    quote:'Justice is like a snake: it only bites the barefooted.',
    source:'Eduardo Galeano',
    citation:'Upside Down: A Primer for the Looking-Glass World',
    year:'2014'
},
{
    quote:'Before you run your race you gotta find your pace.',
    source:'Nipsey Hussle',
    citation:'Perecft Timing'
  
},
{
    quote:'We die. That may be the meaning of life. But we do language. That may be the measures of our lives.',
    source:'Toni Morrison',
    citation:'Nobel Acceptance Speech',
    year:'1993'
},
{
    quote:'Do you know what it means to have a revolution. And what it takes to make a solution.',
    source:'Dennis Brown',
    citation:'Revolution'
},
];


/***
 * `getRandomQuote` function: create a random number and use that number to return quote
***/

function getRandomQuote (){
  const randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}
  
/***
 * `printQuote` function to display random quotes
***/

function printQuote (){
  const randomQuote = getRandomQuote();
    console.log(randomQuote);
  let html = 
  `<p class="quote"> ${randomQuote.quote} </p><p class="source"> ${randomQuote.source}` 
  if ("citation" in randomQuote) {
    html += `<span class="citation"> ${randomQuote.citation} </span>`;
  }
  if ("year" in randomQuote) {
    html += `<span class="year"> ${randomQuote.year} </span>`;
  }
    html +="</p>"
  document.getElementById('quote-box').innerHTML = html; 
}












/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);