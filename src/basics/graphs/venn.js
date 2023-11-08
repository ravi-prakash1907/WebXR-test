// Load data from a JSON file
fetch("http://localhost:8000/" + prompt("Choose one dataset (1, 2)?"), {
// fetch("http://0.0.0.0:8000/" + prompt("Choose one dataset (1, 2)?"), {
    method: 'GET',
    mode: 'cors'
})
 .then(response => response.json())
 .then(jsonData => createBarGraph(jsonData))
 .catch(error => console.error(error));

function createBarGraph(data) {
    console.log(data)
 var scene = document.querySelector("a-scene");
 var barsContainer = document.getElementById("bars");

 var numBars = data.length;
 var barWidth = 0.2;
 var spacing = 0.1;
 
 var color = d3.scaleOrdinal(d3.schemeCategory10);

//////////////////////////////////////////////////////////////////////////////////////////////

//  data.forEach((d, i) => {
//      var barRotation = (i / numBars) * 360;
//      var barHeight = d.value * 0.1; // Adjust the scale factor as needed

//      barsContainer.innerHTML += `<a-box
//          position="${Math.cos(barRotation * (Math.PI / 180)) * 3} 0 ${Math.sin(barRotation * (Math.PI / 180)) * 3}"
//          width="${barWidth}"
//          height="${barHeight}"
//          depth="${barWidth}"
//          color="${color(i)}"
//      ></a-box>`;
//  });






// Create a spherical environment
barsContainer.innerHTML = `<a-scene embedded>
  <a-sky color="#000"></a-sky>
  <a-sphere radius="10" src="#sphere-texture"></a-sphere>
</a-scene>`;

// Iterate through the image paths
const imagePaths = ["./data/img/path1.png", "./data/img/path2.png", "./data/img/path3.png"];

data.forEach((d, i) => {
  var barRotation = (i / numBars) * 360;
  var imagePath = imagePaths[i] || "./data/img/path2.png"; // Use a default image path if the array is too short

  var positionX = Math.cos(barRotation * (Math.PI / 180)) * 10; // Adjust the radius as needed
  var positionZ = Math.sin(barRotation * (Math.PI / 180)) * 10; // Adjust the radius as needed

  // Create an <a-image> element for each image as a texture on the sphere
  barsContainer.innerHTML += `<a-image
    src="#${i}-texture"
    position="${positionX} 0 ${positionZ}"
    width="1" height="1"
  ></a-image>`;

  // Add the image texture to the assets section
  barsContainer.innerHTML += `<img id="${i}-texture" src="${imagePath}" crossorigin="anonymous">`;
});












// // Create a spherical environment
// barsContainer.innerHTML = `<a-scene embedded>
//   <a-sky color="#000"></a-sky>
//   <a-sphere radius="10" src="#sphere-texture"></a-sphere>
// </a-scene>`;

// // Iterate through the image paths
// const imagePaths = [
//   "./data/img/path1.png",
//   "./data/img/path2.png",
//   "./data/img/path3.png"
// ];

// // Define positions for the images
// const positions = [
//   { x: -2, z: -2 },
//   { x: 2, z: -2 },
//   { x: -2, z: 2 }
// ];

// imagePaths.forEach((imagePath, i) => {
//   var positionX = positions[i].x;
//   var positionZ = positions[i].z;

//   // Create an <a-image> element for each image as a texture on the sphere
//   barsContainer.innerHTML += `<a-image
//     src="#${i}-texture"
//     position="${positionX} 0 ${positionZ}"
//     width="1" height="1"
//   ></a-image>`;

//   // Add the image texture to the assets section
//   barsContainer.innerHTML += `<img id="${i}-texture" src="${imagePath}" crossorigin="anonymous">`;
// });


}
