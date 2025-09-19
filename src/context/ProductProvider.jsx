import { useState } from "react";
import ProductContext from "./ProductContext";
import { toast } from "react-toastify";
export const ProductProvider = ({ children }) => {
  const [car, setCar] = useState([]);

  const handleBuy = (product, quantity = 1) => {
    const exist = car.some((item) => item.id === product.id);
    if (exist) {
      toast.error("El producto ya esta agregado");
    } else {
      const productWithQuantity = { ...product, quantity };
      setCar((prev) => [...prev, productWithQuantity]);
      toast.success(` "${product.title}" agregado al carrito`);
    }
  };
  const handleDelete = (productToDelete) => {
    const newCar = car.filter((item) => item.id !== productToDelete.id);
    setCar(newCar);
    console.log(car);
  };
  const handleAddQuantity = (productId) => {
    setCar((prevCar) =>
      prevCar.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const handleSubtractQuantity = (productId) => {
    setCar((prevCar) =>
      prevCar.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <ProductContext.Provider
      value={{
        car,
        handleBuy,
        handleDelete,
        handleAddQuantity,
        handleSubtractQuantity,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
