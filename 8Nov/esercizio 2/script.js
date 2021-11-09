const planet = [{
        name: "Sun",
        radius: 696340,
        surface: "star"
    },
    {
        name: "Mercury",
        radius: 2440,
        surface: "terrestrial"
    },
    {
        name: "Venus",
        radius: 6052,
        surface: "terrestrial"
    },
    {
        name: "Earth",
        radius: 6371,
        surface: "terrestrial"
    },
    {
        name: "Mars",
        radius: 3389,
        surface: "terrestrial"
    },
    {
        name: "Jupiter",
        radius: 69911,
        surface: "gas giant"
    },
    {
        name: "Saturn",
        radius: 58232,
        surface: "gas giant"
    },
    {
        name: "Uranus",
        radius: 25362,
        surface: "ice giant"
    },
    {
        name: "Neptune",
        radius: 24622,
        surface: "ice giant"
    },
];

const NewName = ((planet) => {
    switch (planet.name) {
        case "Sun":
            planet.name = "Sole";
            break;

        case "Mercury":
            planet.name = "Mercurio";
            break;

        case "Venus":
            planet.name = "Venere";
            break;

        case "Earth":
            planet.name = "Terra";
            break;

        case "Mars":
            planet.name = "Marte";
            break;

        case "Jupiter":
            planet.name = "Giove";
            break;

        case "Saturn":
            planet.name = "Saturno";
            break;

        case "Uranus":
            planet.name = "Urano";
            break;

        case "Neptune":
            planet.name = "Nettuno";
            break;
    }
    return planet
})


const nomiIta = planet.map(NewName);

console.log(nomiIta);

const diam = (planet) => planet.radius * 2;

const diamTot = solarSystem.map(diam)

console.log(diamTot)