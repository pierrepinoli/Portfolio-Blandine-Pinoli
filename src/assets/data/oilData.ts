// importation des images

const asian_panorama_original = "/images/Huile/asian_panorama.jpg";
const bathers_original = "/images/Huile/bathers_sold.jpg";
const beach_huts_original = "/images/Huile/beach_huts_sold.jpg";
const cable_car_original = "/images/Huile/cable_car.jpg";

const filters = {
  sold: "Vendu",
  available: "Disponible",
};

const oilData = [
  {
    title: "Baigneuses",
    imageOriginal: bathers_original,
    ariaLabel: "",
    alt: "peinture de quatres baigneuses",
    available: false,
  },
  {
    title: "Cabanes de plage",
    imageOriginal: beach_huts_original,
    ariaLabel: "",
    alt: "peinture de cabanes de plages",
    available: false,
  },
  {
    title: "Panorama asiatique",
    imageOriginal: asian_panorama_original,
    ariaLabel: "",
    alt: "peinture d'un panorama d'une côte asiatique",
    available: true,
  },
  {
    title: "Télécabines",
    imageOriginal: cable_car_original,
    ariaLabel: "",
    alt: "peinture de télécabine",
    available: true,
  },
];

export { filters, oilData };
