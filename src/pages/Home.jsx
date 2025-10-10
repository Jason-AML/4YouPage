import { FilterProduct } from "../components/FilterProduct";
import { Hero } from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Hero showText={false} />
      <FilterProduct />
    </>
  );
};
