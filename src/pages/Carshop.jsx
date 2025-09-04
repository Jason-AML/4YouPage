import { useContext } from "react";
import ProductContext from "../context/ProductContext";

export const Carshop = () => {
  const { car = [] } = useContext(ProductContext);

  return (
    <div>
      {car.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};
