// importation des images

const asian_panorama = "/images/Huile/asian_panorama.jpg";
const bathers = "/images/Huile/bathers_sold.jpg";
const beach_huts = "/images/Huile/beach_huts_sold.jpg";
const cable_car = "/images/Huile/cable_car.jpg";

const boat_sold = "/images/Huile/boat_sold.jpg";
const buoy_boat = "/images/Huile/buoy_boat.jpg";
const cow = "/images/Huile/cow.jpg";
const deckchair = "/images/Huile/deckchair.jpg";

const fish = "/images/Huile/fish.jpg";
const fishes = "/images/Huile/fishes.jpg";
const hut_1 = "/images/Huile/hut_1.jpg";
const hut_2 = "/images/Huile/hut_2.jpg";

const pens = "/images/Huile/pens.jpg";
const pilchards = "/images/Huile/pilchards.jpg";
const pots_of_rice = "/images/Huile/pots_of_rice.jpg";
const sea_side = "/images/Huile/sea_side.jpg";

const seahorse = "/images/Huile/seahorse.jpg";
const slippers = "/images/Huile/slippers.jpg";
const tajine_sold = "/images/Huile/tajine_sold.jpg";
const tongue = "/images/Huile/tongue.jpg";

const van_sold = "/images/Huile/van_sold.jpg";
const venice = "/images/Huile/venice.jpg";
const vespa = "/images/Huile/vespa.jpg";
const vespa_2 = "/images/Huile/vespa_2.jpg";

const vespa_3 = "/images/Huile/vespa_3.jpg";
const vespa_4 = "/images/Huile/vespa_4.jpg";
const vespa_5 = "/images/Huile/vespa_5.jpg";
const vintage_car = "/images/Huile/vintage_car.jpg";

const filters = {
  sold: "Vendu",
  available: "Disponible",
};

const oilData = [
  {
    title: "Baigneuses",
    imageOriginal: bathers,
    ariaLabel: "",
    alt: "peinture de quatres baigneuses",
    available: false,
  },
  {
    title: "Cabanes de plage",
    imageOriginal: beach_huts,
    ariaLabel: "",
    alt: "peinture de cabanes de plages",
    available: false,
  },
  {
    title: "Panorama asiatique",
    imageOriginal: asian_panorama,
    ariaLabel: "",
    alt: "peinture d'un panorama d'une côte asiatique",
    available: true,
  },
  {
    title: "Télécabines",
    imageOriginal: cable_car,
    ariaLabel: "",
    alt: "peinture de télécabine",
    available: true,
  },
  {
    title: "Bateau",
    imageOriginal: boat_sold,
    ariaLabel: "",
    alt: "peinture d'un bateau",
    available: false,
  },
  {
    title: "Bouées de mouillage",
    imageOriginal: buoy_boat,
    ariaLabel: "",
    alt: "peinture de bouées de mouillage",
    available: true,
  },
  {
    title: "Vache",
    imageOriginal: cow,
    ariaLabel: "",
    alt: "peinture d'un vache",
    available: true,
  },
  {
    title: "Transat",
    imageOriginal: deckchair,
    ariaLabel: "",
    alt: "peinture de transat",
    available: true,
  },
  {
    title: "Poisson",
    imageOriginal: fish,
    ariaLabel: "",
    alt: "peinture d'un poisson dans une assiette",
    available: true,
  },
  {
    title: "Poissons",
    imageOriginal: fishes,
    ariaLabel: "",
    alt: "peinture de poissons en train de sècher",
    available: true,
  },
  {
    title: "Cabane",
    imageOriginal: hut_1,
    ariaLabel: "",
    alt: "peinture d'un paysage avec une cabane",
    available: true,
  },
  {
    title: "Cabane",
    imageOriginal: hut_2,
    ariaLabel: "",
    alt: "peinture d'un paysage avec une cabane",
    available: true,
  },
  {
    title: "Crayons",
    imageOriginal: pens,
    ariaLabel: "",
    alt: "peinture représentant des crayons",
    available: true,
  },
  {
    title: "Boites de conserves",
    imageOriginal: pilchards,
    ariaLabel: "",
    alt: "peinture de boites de conserves",
    available: true,
  },
  {
    title: "Pots de riz",
    imageOriginal: pots_of_rice,
    ariaLabel: "",
    alt: "peinture de pots de riz",
    available: true,
  },
  {
    title: "Bord de mer",
    imageOriginal: sea_side,
    ariaLabel: "",
    alt: "peinture d'un paysage de bord de mer",
    available: true,
  },
  {
    title: "Hippocampe",
    imageOriginal: seahorse,
    ariaLabel: "",
    alt: "peinture d'un hippocampe",
    available: true,
  },
  {
    title: "Babouches",
    imageOriginal: slippers,
    ariaLabel: "",
    alt: "peinture représentant des babouches",
    available: true,
  },
  {
    title: "Tajines",
    imageOriginal: tajine_sold,
    ariaLabel: "",
    alt: "peinture représentant des tajines de couleurs différentes",
    available: false,
  },
  {
    title: "Tongues",
    imageOriginal: tongue,
    ariaLabel: "",
    alt: "peinture représentant des tongues de couleurs différentes",
    available: true,
  },
  {
    title: "Van",
    imageOriginal: van_sold,
    ariaLabel: "",
    alt: "peinture d'un van",
    available: false,
  },
  {
    title: "Venise",
    imageOriginal: venice,
    ariaLabel: "",
    alt: "peinture représentant un vespa",
    available: true,
  },
  {
    title: "Vespa",
    imageOriginal: vespa,
    ariaLabel: "",
    alt: "peinture représentant un vespa",
    available: false,
  },
  {
    title: "Vespa",
    imageOriginal: vespa_2,
    ariaLabel: "",
    alt: "peinture représentant un vespa",
    available: true,
  },
  {
    title: "Vespa",
    imageOriginal: vespa_3,
    ariaLabel: "",
    alt: "peinture représentant un vespa",
    available: false,
  },
  {
    title: "Vespa",
    imageOriginal: vespa_4,
    ariaLabel: "",
    alt: "peinture représentant un vespa",
    available: true,
  },
  {
    title: "Vespa",
    imageOriginal: vespa_5,
    ariaLabel: "",
    alt: "peinture représentant un vespa",
    available: true,
  },
  {
    title: "Vieille voiture",
    imageOriginal: vintage_car,
    ariaLabel: "",
    alt: "peinture représentant une vieille voiture",
    available: true,
  },
];

export { filters, oilData };
