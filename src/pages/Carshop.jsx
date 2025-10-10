import { useContext, useEffect, useState } from "react";
import ProductContext from "../context/ProductContext";
import { Card } from "../components/Card";

import { useAuth } from "../context/AuthContext";
import Navbar from "../components/navbar/Navbar";

export const Carshop = () => {
  const { car = [] } = useContext(ProductContext);
  const [total, setTotal] = useState(0);
  const { user } = useAuth();

  useEffect(() => {
    const sumaTotal = car.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
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
            <div className="flex flex-wrap justify-center gap-5 py-5">
              {car.map((item) => (
                <Card key={item.id} product={item} enableActions={false} />
              ))}
            </div>
            <p>Total: ${Math.round(total)}</p>
            {user && <button className="btn btn-primary">comprar</button>}
          </>
        )}
      </main>
    </>
  );
};
