import { useState } from "react";
import { useFetchProduct } from "../hooks/useFetchProduct";
import { Card } from "./Card";

export const FilterProduct = () => {
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
      <section id="cards">
        <h3 className="flex justify-center p-5">OUR PRODUCTS</h3>
        <form onSubmit={searcher} className="m-5">
          <label htmlFor="filter">
            <input
              id="filter"
              type="text"
              placeholder="Men´s Clothing"
              value={search}
              onChange={searcher}
            />
          </label>
          <button className="btn btn-ghost btn-circle" type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </form>

        {loading ? (
          <p>Cargando</p>
        ) : results.length === 0 ? (
          <p>No se encontraron articulos</p>
        ) : (
          <div className="flex flex-wrap gap-4 items-center justify-center">
            {results.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </>
  );
};
