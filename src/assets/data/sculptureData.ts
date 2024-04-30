// importation des images

const calimero_1 = "/images/Sculptures/calimero_1.jpg";
const calimero_2 = "/images/Sculptures/calimero_2.jpg";

const filters = {
  sold: "Vendu",
  available: "Disponible",
};

const sculptureData = [
  {
    title: "Calimero",
    imageOriginal: calimero_1,
    ariaLabel: "",
    alt: "Sculpture de Calimero",
    available: false,
  },
  {
    title: "Calimero",
    imageOriginal: calimero_2,
    ariaLabel: "",
    alt: "Sculpture de Calimero",
    available: false,
  },
];

export { sculptureData, filters };
