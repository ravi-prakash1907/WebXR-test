 // Load data from a JSON file
 fetch('data/data.json')
 .then(response => response.json())
 .then(jsonData => createBarGraph(jsonData))
 .catch(error => console.error(error));

function createBarGraph(data) {
 var scene = document.querySelector("a-scene");
 var barsContainer = document.getElementById("bars");

 var numBars = data.length;
 var barWidth = 0.2;
 var spacing = 0.1;
 
 var color = d3.scaleOrdinal(d3.schemeCategory10);

 data.forEach((d, i) => {
     var barRotation = (i / numBars) * 360;
     var barHeight = d.value * 0.1; // Adjust the scale factor as needed

     barsContainer.innerHTML += `<a-box
         position="${Math.cos(barRotation * (Math.PI / 180)) * 3} 0 ${Math.sin(barRotation * (Math.PI / 180)) * 3}"
         width="${barWidth}"
         height="${barHeight}"
         depth="${barWidth}"
         color="${color(i)}"
     ></a-box>`;
 });
}