// importation des images

const boat = "/images/Aquarelle/boat.jpg";
const old_car = "/images/Aquarelle/old_car.jpg";

const filters = {
  sold: "Vendu",
  available: "Disponible",
};

const watercolorData = [
  {
    title: "Barque",
    imageOriginal: boat,
    ariaLabel: "",
    alt: "Peinture à l'aquarelle d'une barque",
    available: false,
  },
  {
    title: "Vieille voiture",
    imageOriginal: old_car,
    ariaLabel: "",
    alt: "Peinture à l'aquarelle d'une vieille voiture",
    available: false,
  },
];

export { filters, watercolorData };
