// importation des images

const golf = "/images/Acrylique/golf.jpg";
const new_york_vintage = "/images/Acrylique/new_york_vintage.jpg";

const filters = {
  sold: "Vendu",
  available: "Disponible",
};

const acrylicData = [
  {
    title: "Golfeur",
    imageOriginal: golf,
    ariaLabel: "",
    alt: "peinture d'un golf en train de frapper la balle",
    available: true,
  },
  {
    title: "New York",
    imageOriginal: new_york_vintage,
    ariaLabel: "",
    alt: "peinture représentant New York",
    available: true,
  },
];

export { acrylicData, filters };
