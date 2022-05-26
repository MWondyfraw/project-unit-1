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
  sources:'Eduardo Galeano',
  citation:'Upside Down: A Primer for the Looking-Glass World',
  year:'2014',
  tags:'Inspirational'
},
{
  quotes:'Before you run your race you gotta find your pace.',
  sources:'Nipsey Hussle',
 citation:'Perft Timing',
  
},
{
  quotes:'We die. That may be the meaning of life. But we do language. That may be the measures of our lives.',
  sources:'Toni Morrison',
  citation:'Nobel Acceptance Speech',
  year:'1993'
},
{
  quotes:'Do you know what it means to have a revolution. And what it takes to make a solution.',
  sources:'Dennis Brown',
  citation:'Revolution',
  
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
  const html = 
  `<p class="quote"> A random quote </p><p class="source"> quote source </p>`
  if ("citation" in randomQuote) {
    `html += <span class="citation"> quote citation </span>`;
  }
  if ("year" in randomQuote) {
    `html += <span class="year"> quote year </span>`;
  }
}
document.getElementById('quote-box').innerHTML = yourStringHere; 











/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);