import Image from "next/image";
import Link from "next/link";

import { acrylicData } from "@/assets/data/acrylicData";
import { oilData } from "@/assets/data/oilData";
import { sculptureData } from "@/assets/data/sculptureData";
import { watercolorData } from "@/assets/data/watercolorData";

const Home = () => {
  return (
    <section id="home" className="primary-color">
      <div className="home-grid-container grid grid-cols-2 grid-rows-2 gap-4">
        <Link href="/acrylic">
          <div className="home-grid-img-container home-grid-acrylic-link flex content-center primary-color relative overflow-hidden">
            <Image
              src={acrylicData[0].imageOriginal}
              alt={acrylicData[0].alt}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
            />
          </div>
        </Link>
        <Link href="/oil">
          <div className="home-grid-img-container home-grid-oil-link flex content-center primary-color relative overflow-hidden">
            <Image
              src={oilData[0].imageOriginal}
              alt={oilData[0].alt}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
            />
          </div>
        </Link>
        <Link href="/sculpture">
          <div className="home-grid-img-container home-grid-sculpture-link flex content-center primary-color relative overflow-hidden">
            <Image
              src={sculptureData[0].imageOriginal}
              alt={sculptureData[0].alt}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
            />
          </div>
        </Link>
        <Link href="/watercolor">
          <div className="home-grid-img-container home-grid-watercolor-link flex content-center primary-color relative overflow-hidden">
            <Image
              src={watercolorData[0].imageOriginal}
              alt={watercolorData[0].alt}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Home;
