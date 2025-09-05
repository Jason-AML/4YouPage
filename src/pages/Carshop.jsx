import { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { Card } from "../components/Card";

export const Carshop = () => {
  const { car = [] } = useContext(ProductContext);

  return (
    <div>
      {car.map((item) => (
        <Card key={item.id} product={item} enableActions={false} />
      ))}
    </div>
  );
};
