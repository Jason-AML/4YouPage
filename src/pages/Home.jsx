import { FilterProduct } from "../components/FilterProduct";
import { Hero } from "../components/Hero";
import Navbar from "../components/Navbar";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Hero showText={false} />
      <FilterProduct />
    </>
  );
};
