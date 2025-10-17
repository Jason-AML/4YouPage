import { FilterProduct } from "../components/FilterProduct";
import { Hero } from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";

import bgTommy from "../assets/hero/tommy.webp";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Hero bgImage={bgTommy} />
      <FilterProduct />
    </>
  );
};
