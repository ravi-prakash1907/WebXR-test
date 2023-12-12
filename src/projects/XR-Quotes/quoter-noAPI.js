// Load data from a JSON file

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

// random quote index generator 
function getRandomInt(min=0, max=5421) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// filepath
const qFilePath = './QuoteServer/data/quotes.json';  
// reading file 
fetch(qFilePath)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => plotQuote(data[getRandomInt()]))
  .catch((error) => console.error('Error:', error));


////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

// function to plot a text information in webXR using A-frame
function addTextEntityToContainer(container, text, color, font, position) {
  const entity = document.createElement('a-entity');
  // building entity
  entity.setAttribute('text', {
    value: text,
    color: color,
    font: font,
    align: 'center',
    width: 3,
  });
  // positioning 
  entity.setAttribute('position', position);
  // attatching to page
  container.appendChild(entity);
}


function plotQuote(data) {
  console.log(data)

  // tracing plotting location //
  var quoteContainer = document.getElementById("quote");
  var authContainer = document.getElementById("author");

  //////////////////////////////

  const gotQuote = data['quoteText'];
  const qColor = "#f00";
  const qFont = "sourcecodepro";
  const qPosition = '0 1 -4';
  // adding
  addTextEntityToContainer(quoteContainer, gotQuote, qColor, qFont, qPosition);

  const quoteAuthor = data['quoteAuthor'];
  const authColor = "#000";
  const authFont = "dejavu";
  const authPosition = '0 1 -4';
  // adding
  addTextEntityToContainer(authContainer, quoteAuthor, authColor, authFont, authPosition);
}