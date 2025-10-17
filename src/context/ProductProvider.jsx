import { useCallback, useState } from "react";
import ProductContext from "./ProductContext";
import { toast } from "react-toastify";
export const ProductProvider = ({ children }) => {
  const [car, setCar] = useState([]);

  const handleBuy = useCallback(
    (product, quantity = 1) => {
      const exist = car.some((item) => item.id === product.id);
      if (exist) {
        toast.error("El producto ya está agregado");
      } else {
        const productWithQuantity = { ...product, quantity };
        setCar((prev) => [...prev, productWithQuantity]);
        toast.success(`"${product.title}" agregado al carrito`);
      }
    },
    [car]
  );
  const handleDelete = useCallback((productToDelete) => {
    setCar((prevCar) =>
      prevCar.filter((item) => item.id !== productToDelete.id)
    );
  }, []);

  const handleAddQuantity = useCallback((productId) => {
    setCar((prevCar) =>
      prevCar.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }, []);
  const handleSubtractQuantity = useCallback((productId) => {
    setCar((prevCar) =>
      prevCar.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }, []);
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
