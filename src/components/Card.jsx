import { useContext, useState } from "react";
import ProductContext from "../context/ProductContext";
import { Modal } from "./Modal";

export const Card = ({ product }) => {
  const { handleBuy } = useContext(ProductContext);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const onBuy = () => {
    handleBuy(product);
  };
  return (
    <div className="card bg-base-100 w-96 h-150 shadow-sm">
      <figure className="h-100 ">
        <img src={product.image} alt={product.title} className="h-75" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p>${product.price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={onBuy}>
            Buy Now
          </button>
          <button className="btn" onClick={openModal}>
            Open Modal
          </button>
          <Modal
            title={product.title}
            description={product.description}
            category={product.category}
            image={product.image}
            closeModal={closeModal}
            showModal={showModal}
          />
        </div>
      </div>
    </div>
  );
};
