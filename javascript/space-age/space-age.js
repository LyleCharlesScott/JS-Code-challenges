'use strict';

const spaceAge = function (ageInSeconds) {
    this.seconds = ageInSeconds;
    this.ageInYears = this.seconds/earthYearInSeconds;
};

const organizePlanetData = function (planetData) {
    let Planet = function (name, orbitalPeriod) {
        this.name = name;
        this.orbitalPeriod = orbitalPeriod;
    };
    planetData.forEach(data => {
        planets.push(new Planet(data[0], data[1]))
    });
}

const createPlanetFunctions = function () {
    planets.forEach(planet => {
        spaceAge.prototype[`on${planet.name}`] = function () {
            return this.earthYearToSpaceYear(planet);
        };
    });
}

spaceAge.prototype.earthYearToSpaceYear = function (planet) {
    return Math.round(this.ageInYears/planet.orbitalPeriod * 100)/100;
};

const earthYearInSeconds = 31557600;
const planetData = [
    ['Mercury', 0.2408467], ['Venus', 0.61519726], ['Earth', 1], 
    ['Mars', 1.8808158], ['Jupiter', 11.862615], ['Saturn', 29.447498], 
    ['Uranus', 84.016846], ['Neptune', 164.79132]
];

const planets = [];
organizePlanetData(planetData);
createPlanetFunctions();

module.exports = spaceAge;