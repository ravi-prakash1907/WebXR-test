// Load data from a JSON file

fetch("http://localhost:8000/", {
    method: 'GET',
    mode: 'cors'
})
 .then(response => response.json())
 .then(jsonData => plotQuote(jsonData))
 .catch(error => console.error(error));



function plotQuote(data) {
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