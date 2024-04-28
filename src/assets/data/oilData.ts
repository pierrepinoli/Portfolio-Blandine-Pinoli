// importation des images

import asian_panorama_original from "../images/Huile/asian_panorama.jpg";
import asian_panorama_webp from "../images/Huile/asian_panorama.webp";

import cable_car_original from "../images/Huile/cable_car.jpg";
import cable_car_webp from "../images/Huile/cable_car.webp";

import bathers_original from "../images/Huile/bathers_sold.jpg";
import bathers_webp from "../images/Huile/bathers_sold.webp";

import beach_huts_original from "../images/Huile/beach_huts_sold.jpg";
import beach_huts_webp from "../images/Huile/beach_huts_sold.webp";

export const filters = {
  sold: "Vendu",
  available: "Disponible",
};

const oilData = [
  {
    title: "Baigneuses",
    imageWebp: bathers_webp,
    imageOriginal: bathers_original,
    ariaLabel: "",
    alt: "peinture de quatres baigneuses",
    categories: [filters.sold],
  },
  {
    title: "Cabanes de plage",
    imageWebp: beach_huts_webp,
    imageOriginal: beach_huts_original,
    ariaLabel: "",
    alt: "peinture de cabanes de plages",
    categories: [filters.sold],
  },
  {
    title: "Panorama asiatique",
    imageWebp: asian_panorama_webp,
    imageOriginal: asian_panorama_original,
    ariaLabel: "",
    alt: "peinture d'un panorama d'une côte asiatique",
    categories: [filters.available],
  },
  {
    title: "Télécabines",
    imageWebp: cable_car_webp,
    imageOriginal: cable_car_original,
    ariaLabel: "",
    alt: "peinture de télécabine",
    categories: [filters.available],
  },
];

export { oilData };
