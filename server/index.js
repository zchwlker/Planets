var express = require("express");
var app = express();

const planetList =[
  {
    id: 1,
    name: 'Mercury',
    radius: 0.383,
    color: 'DeepSkyBlue',
    orbitSpeed: 0.241,
    spinSpeed: 175.9
  },
  {
    id: 2,
    name: 'Venus',
    radius: 0.949,
    color: 'orange',
    orbitSpeed: 0.615,
    spinSpeed: 116.8
  },
  {
    id: 3,
    name: 'Earth',
    radius: 1,
    color: 'DarkBlue',
    orbitSpeed: 1,
    spinSpeed: 1
  },
  {
    id: 4,
    name: 'Mars',
    radius: 0.532,
    color: 'red',
    orbitSpeed: 1.88,
    spinSpeed: 1.03
  },
  {
    id: 5,
    name: 'Jupiter',
    radius: 11.21,
    color: 'Pink',
    orbitSpeed: 11.9,
    spinSpeed: 0.414
  },
  {
    id: 6,
    name: 'Saturn',
    radius: 9.45,
    color: 'Yellow',
    orbitSpeed: 29.4,
    spinSpeed: 0.444
  },
  {
    id: 7,
    name: 'Uranus',
    radius: 4.01,
    color: 'LightSteelBlue',
    orbitSpeed: 83.7,
    spinSpeed: 0.718
  },
  {
    id: 8,
    name: 'Nepturn',
    radius: 3.88,
    color: 'blue',
    orbitSpeed: 163.7,
    spinSpeed: 0.671
  },
  {
    id: 9,
    name: 'Pluto (Not really a planet)',
    radius: 0.186,
    color: 'Ivory',
    orbitSpeed: 247.9,
    spinSpeed: 6.39
  },
]

app.get("/RandomPlanet",(req,res,next) =>{

    var index = Math.floor(Math.random() * Math.floor(9))+1;

    res.json(planetList[index]);
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});
