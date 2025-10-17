import { useState } from "react";
import { useFetchProduct } from "../hooks/useFetchProduct";
import { Card } from "./Card";

export const FilterProduct = ({ filterCategory = true }) => {
  const { items, loading } = useFetchProduct(
    "https://fakestoreapi.com/products"
  );
  const [search, setSearch] = useState("");
  const searcher = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    console.log(search);
  };
  let results = [];
  if (!search) {
    results = items;
  } else {
    results = items.filter((product) =>
      product.category.toLowerCase().includes(search.toLowerCase())
    );
  }
  return (
    <>
      <section id="cards" className="bg-base-300 ">
        <h3 className="flex  p-5 text-4xl font-bold">OUR COLLETION</h3>
        {filterCategory && (
          <form className="flex gap-2 items-center  p-5">
            <label htmlFor="filter">
              Category:
              <input
                id="filter"
                type="text"
                placeholder="Men's Clothing"
                value={search}
                onChange={searcher}
                className="input input-bordered"
              />
            </label>
          </form>
        )}

        {loading ? (
          <p>Cargando</p>
        ) : results.length === 0 ? (
          <p>No se encontraron articulos</p>
        ) : (
          <div className="flex flex-wrap gap-4 items-center justify-center">
            {results.map((product) => (
              <Card key={product.id} product={product} enableDelate={false} />
            ))}
          </div>
        )}
      </section>
    </>
  );
};
