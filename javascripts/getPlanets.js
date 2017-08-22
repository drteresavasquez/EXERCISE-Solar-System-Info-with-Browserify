"use strict";
console.log("getPlanets, Yo!");

let galaxy = require("./planetInfo.js");

$("nav").click((event) => {
    if (event.target.className === "dropdown-item"){
        let buttonValue = event.target.value;
        $('.container').empty();
        $('#planetHeading').html(`<h1>All About ${buttonValue}:</h1>`);
        outputTo(buttonValue);

    }
});

function outputTo(buttonValue) {
    let galaxyObj = Object.keys(galaxy.planets);

    $('.container').append(`
        <img src="${galaxy.planets[buttonValue].img}" style="width:304px">
        <p>Planet Name: ${galaxy.planets[buttonValue].name}</p>
        <p>Year Discovered: ${galaxy.planets[buttonValue].year_discovered}</p>
        <p>Planet Mass: ${galaxy.planets[buttonValue].mass}</p>
        <p>Planet Size: ${galaxy.planets[buttonValue].size}</p>
        <p>Distance From the Sun: ${galaxy.planets[buttonValue].dfromsun}</p>
        <p>Atmosphere Composition: ${galaxy.planets[buttonValue].atmosphere_comp}</p>
        <p>Satellites: ${galaxy.planets[buttonValue].satellites}</p>
        <p>Exploration: ${galaxy.planets[buttonValue].exploration}</p>`);
    
  }

