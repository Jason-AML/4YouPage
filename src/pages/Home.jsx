import { FilterProduct } from "../components/FilterProduct";
import { Hero } from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import imageBoy from "../assets/hero/boy.webp";
import imageGirl from "../assets/hero/street-girl.jpg";
export const Home = () => {
  return (
    <>
      <Navbar />
      <Hero leftImg={imageGirl} rightImg={imageBoy} />
      <FilterProduct />
    </>
  );
};
