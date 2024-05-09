// importation des images

const golf = "/images/Acrylique/golf.jpg";
const new_york_vintage = "/images/Acrylique/new_york_vintage.jpg";

const africa_mask = "/images/Acrylique/africa_mask.jpg";
const african_woman = "/images/Acrylique/african_woman.jpg";
const african_woman_2 = "/images/Acrylique/african_woman_2.jpg";
const african_woman_3 = "/images/Acrylique/african_woman_3.jpg";

const bowl_2 = "/images/Acrylique/bowl_2.jpg";
const bowl_sold = "/images/Acrylique/bowl_sold.jpg";

const chicken = "/images/Acrylique/chicken.jpg";
const city = "/images/Acrylique/city.jpg";
const cups = "/images/Acrylique/cups.jpg";
const farfalle = "/images/Acrylique/farfalle.jpg";
const glass_of_wine_sold = "/images/Acrylique/glass_of_wine_sold.jpg";
const gondola = "/images/Acrylique/gondola.jpg";

const ice_cream_sold = "/images/Acrylique/ice_cream_sold.jpg";
const jar = "/images/Acrylique/jar.jpg";
const lancer = "/images/Acrylique/lancer.jpg";
const lion = "/images/Acrylique/lion.jpg";
const new_york_1 = "/images/Acrylique/new_york_1.jpg";
const new_york_vintage_2 = "/images/Acrylique/new_york_vintage_2.jpg";

const planets = "/images/Acrylique/planets.jpg";
const rhinoceros = "/images/Acrylique/rhinoceros.jpg";
const school_bag = "/images/Acrylique/school_bag.jpg";
const ski_sold = "/images/Acrylique/ski_sold.jpg";
const tajine = "/images/Acrylique/tajine.jpg";
const terracotta_pots = "/images/Acrylique/terracotta_pots.jpg";

const tulips = "/images/Acrylique/tulips.jpg";
const vespa = "/images/Acrylique/vespa.jpg";

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
    alt: "peinture représentant la ville de New York",
    available: true,
  },
  {
    title: "Masque africain",
    imageOriginal: africa_mask,
    ariaLabel: "",
    alt: "peinture d'un masque africain",
    available: true,
  },
  {
    title: "Femme africaine",
    imageOriginal: african_woman,
    ariaLabel: "",
    alt: "peinture d'un femme africaine",
    available: true,
  },
  {
    title: "Femme africaine",
    imageOriginal: african_woman_2,
    ariaLabel: "",
    alt: "peinture d'un femme africaine",
    available: true,
  },
  {
    title: "Femme africaine",
    imageOriginal: african_woman_3,
    ariaLabel: "",
    alt: "peinture d'un femme africaine",
    available: true,
  },
  {
    title: "Bols",
    imageOriginal: bowl_2,
    ariaLabel: "",
    alt: "peinture représentant des bols de differentes couleurs",
    available: true,
  },
  {
    title: "Bols",
    imageOriginal: bowl_sold,
    ariaLabel: "",
    alt: "peinture représentant des bols de differentes couleurs",
    available: false,
  },
  {
    title: "Poulette",
    imageOriginal: chicken,
    ariaLabel: "",
    alt: "peinture d'une poulette en train de balayer",
    available: true,
  },
  {
    title: "Ville",
    imageOriginal: city,
    ariaLabel: "",
    alt: "peinture représentant une ville",
    available: true,
  },
  {
    title: "Tasses",
    imageOriginal: cups,
    ariaLabel: "",
    alt: "peinture représentant des tasses de differentes couleurs",
    available: true,
  },
  {
    title: "Farfalle",
    imageOriginal: farfalle,
    ariaLabel: "",
    alt: "peinture représentant des farfalles",
    available: true,
  },
  {
    title: "Verres de vin",
    imageOriginal: glass_of_wine_sold,
    ariaLabel: "",
    alt: "peinture représentant des verres de vins",
    available: false,
  },
  {
    title: "Gondoles",
    imageOriginal: gondola,
    ariaLabel: "",
    alt: "peinture représentant des gondoles sur un canal urbain",
    available: true,
  },
  {
    title: "Glaces",
    imageOriginal: ice_cream_sold,
    ariaLabel: "",
    alt: "peinture représentant des batonnets de glace",
    available: false,
  },
  {
    title: "Jarres",
    imageOriginal: jar,
    ariaLabel: "",
    alt: "peinture représentant des jarres de couleurs différentes",
    available: true,
  },
  {
    title: "Lancier",
    imageOriginal: lancer,
    ariaLabel: "",
    alt: "peinture représentant un lancier tenant sa lance",
    available: true,
  },
  {
    title: "Lion",
    imageOriginal: lion,
    ariaLabel: "",
    alt: "portrait d'un lion",
    available: true,
  },
  {
    title: "New York",
    imageOriginal: new_york_1,
    ariaLabel: "",
    alt: "peinture représentant la ville de New York",
    available: true,
  },
  {
    title: "New York",
    imageOriginal: new_york_vintage_2,
    ariaLabel: "",
    alt: "peinture représentant la ville de New York",
    available: true,
  },
  {
    title: "Planètes",
    imageOriginal: planets,
    ariaLabel: "",
    alt: "peinture représentant des planètes",
    available: true,
  },
  {
    title: "Rhinocéros",
    imageOriginal: rhinoceros,
    ariaLabel: "",
    alt: "peinture d'un rhinocéros",
    available: true,
  },
  {
    title: "Porte-manteau d'écolier",
    imageOriginal: school_bag,
    ariaLabel: "",
    alt: "peinture d'un porte-manteau d'écolier",
    available: true,
  },
  {
    title: "Ski",
    imageOriginal: ski_sold,
    ariaLabel: "",
    alt: "peinture d'un skieur",
    available: false,
  },
  {
    title: "Tajines",
    imageOriginal: tajine,
    ariaLabel: "",
    alt: "peinture représentant des tajines de couleurs différentes",
    available: true,
  },
  {
    title: "Pots en terre cuite",
    imageOriginal: terracotta_pots,
    ariaLabel: "",
    alt: "peinture de pots en terre cuite",
    available: true,
  },
  {
    title: "Tulipes",
    imageOriginal: tulips,
    ariaLabel: "",
    alt: "peinture représentant des tulipes",
    available: true,
  },
  {
    title: "PVespa",
    imageOriginal: vespa,
    ariaLabel: "",
    alt: "peinture d'un vespa",
    available: true,
  },
];

export { acrylicData, filters };
