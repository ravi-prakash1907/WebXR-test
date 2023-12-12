// Load data from a JSON file

fetch("http://localhost:8000/", {
    method: 'GET',
    mode: 'cors'
})
 .then(response => response.json())
 .then(jsonData => plotQuote(jsonData))
 .catch(error => console.error(error));


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