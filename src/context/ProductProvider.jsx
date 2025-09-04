import { useState } from "react";
import ProductContext from "./ProductContext";
import { toast } from "react-toastify";
export const ProductProvider = ({ children }) => {
  const [car, setCar] = useState([]);

  const handleBuy = (product) => {
    const exist = car.some((item) => item.id === product.id);
    if (exist) {
      toast.error("El producto ya esta agregado");
    } else {
      setCar((prev) => [...prev, product]);
      toast.success(` "${product.title}" agregado al carrito`);
      console.log(car);
    }
  };

  return (
    <ProductContext.Provider value={{ car, handleBuy }}>
      {children}
    </ProductContext.Provider>
  );
};
