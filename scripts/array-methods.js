const planets = [
  "mercury",
  "venus",
  "earth",
  "mars",
  "jupiter",
  "saturn",
  "uranus",
  "neptune",
];

const planetEl = document.getElementById("planets");

// planets.forEach((planet) => {
//   planetEl.innerHTML += `<div>${planet}</div>`;
// });

const capitalize = planets.map(
  (planet) => planet[0].toUpperCase() + planet.slice(1)
);

const filtered = planets.filter((planet) => {
  if (planet.includes("e")) {
    planetEl.innerHTML += `<div>${planet}</div>`;
  }
});
