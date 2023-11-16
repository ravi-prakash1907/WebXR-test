// Load data from a JSON file
fetch("./data/" + prompt("Here, we plot the graph of last 11 days' closing price of choosen stocks (from NIFTY top 100) recorded at 3:00PM. \nChoose one dataset (wipro, zomato)?") + ".json", {
// fetch("http://0.0.0.0:8000/" + prompt("Choose one dataset (1, 2)?"), {
    method: 'GET',
    mode: 'cors'
})
 .then(response => response.json())
 .then(jsonData => createBarGraph(jsonData))
 .catch(error => console.error(error));


AFRAME.registerComponent('text', {
    schema: {
      value: { type: 'string', default: 'DefaultCaption' },
      align: { type: 'string', default: 'center' },
      width: { type: 'number', default: 2 }
    },
  
    init: function () {
      const data = this.data;
      const textEntity = document.createElement('a-text');
      textEntity.setAttribute('value', data.value);
      textEntity.setAttribute('label', data.label);
      textEntity.setAttribute('align', data.align);
      textEntity.setAttribute('width', data.width);
      this.el.appendChild(textEntity);
    }
  });
  


function createBarGraph(data) {
    console.log(data)
 var scene = document.querySelector("a-scene");
 var barsContainer = document.getElementById("bars");

 var numBars = data.length;
 var barWidth = 0.2;
 var spacing = 0.1;
 
 var color = d3.scaleOrdinal(d3.schemeCategory10);

 data.forEach((d, i) => {
     var barRotation = (i / numBars) * 360;
     var barHeight = d.value * 0.01; // Adjust the scale factor as needed
     var barCaption = d.label; 
     var initPoz = i / numBars;

     barsContainer.innerHTML += `<a-box
        position="${initPoz * 10} ${(-barHeight / 2)} 0"
        //  position="${Math.cos(barRotation * (Math.PI / 180)) * 3} 0 ${Math.sin(barRotation * (Math.PI / 180)) * 3}"
         width="${barWidth}"
         height="${barHeight}"
         depth="${barWidth}"
         color="${color(i)}"
     ></a-box>`;


     barsContainer.innerHTML += `<a-entity text="value: ${barCaption}; align: center; color: black;" position="${initPoz * 10} ${(-barHeight / 2)} 0"></a-entity>`;
 });


  //  Axes
  barsContainer.innerHTML += `<a-entity line="start: -1 0 0; end: 10 0 0; color: black;"></a-entity>`
  barsContainer.innerHTML += `<a-entity line="start: -1 0 0; end: -1 -3 0; color: black;"></a-entity>`

}