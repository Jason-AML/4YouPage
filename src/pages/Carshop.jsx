import { useContext, useEffect, useState } from "react";
import ProductContext from "../context/ProductContext";
import { Card } from "../components/Card";
import Navbar from "../components/Navbar";

export const Carshop = () => {
  const { car = [] } = useContext(ProductContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const sumaTotal = car.reduce((acc, product) => acc + product.price, 0);
    setTotal(sumaTotal);
  }, [car]);
  return (
    <>
      <Navbar />
      <main>
        {car.length === 0 ? (
          <p className="flex items-center justify-center h-screen">
            No hay productos
          </p>
        ) : (
          <>
            <div className="flex flex-wrap gap-5">
              {car.map((item) => (
                <Card key={item.id} product={item} enableActions={false} />
              ))}
            </div>
            <p>Total: ${total}</p>
          </>
        )}
      </main>
    </>
  );
};
