import { Card } from "../components/Card";
import { useFetchProduct } from "../hooks/useFetchProduct";
import { FilterProduct } from "../components/FilterProduct";
export const CardList = () => {
  const { items, loading } = useFetchProduct(
    "https://fakestoreapi.com/products"
  );
  return (
    <section
      id="cards"
      className="section-list-card flex items-center justify-center flex-col "
    >
      <div className="flex flex-col ">
        <h2 className="my-5">OUR PRODUCTS</h2>
        <FilterProduct items={items} />
      </div>
      {loading ? (
        <p>Cargando</p>
      ) : (
        <div className="flex flex-wrap gap-4 items-center justify-center">
          {items.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};
