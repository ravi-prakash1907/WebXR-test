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

function plotQuote(data) {
  // index
  var qIndex = getRandomInt();
  // var data = jsonData[index];

  console.log(data)

  // tracing plotting location
  var quoteContainer = document.getElementById("quote");
  var authContainer = document.getElementById("author");

  var gotQuote = data['quoteText'];
  var quoteAuthor = data['quoteAuthor'];

  /////
  var qText = gotQuote; 
  var qColor = "#f00";
  var qFont = "sourcecodepro";
  var qAuthName = quoteAuthor; 
  var authColor = "#000";
  var authFont = "dejavu";
  /////

  quoteContainer.innerHTML += `<a-entity text="
  value: ${qText};
  color: ${qColor};
  font: ${qFont};
  align: center; width: 3" 
  position="0 1 -4"
  ></a-entity>`;

  authContainer.innerHTML += `<a-entity text="
  value: ${qAuthName};
  color: ${authColor};
  font: ${authFont};
  align: center; width: 2" 
  position="0 1 -4"
  ></a-entity>`;
}