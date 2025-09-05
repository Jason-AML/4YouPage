import { useContext, useState } from "react";
import ProductContext from "../context/ProductContext";
import { Modal } from "./Modal";

export const Card = ({
  product,
  enableActions = true,
  enableDelate = true,
}) => {
  const { handleBuy, handleDelete } = useContext(ProductContext);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const onBuy = () => {
    handleBuy(product);
  };
  const onDelete = () => {
    handleDelete(product);
  };
  return (
    <div className="card bg-base-100 w-96 h-120 shadow-sm">
      <figure className="h-100 ">
        <img src={product.image} alt={product.title} className="h-75" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p>${product.price}</p>

        {enableActions && (
          <>
            <div className="card-actions justify-end">
              <button className="btn btn-primary" onClick={onBuy}>
                Buy Now
              </button>
              <button className="btn" onClick={openModal}>
                DESCRIPTION
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
          </>
        )}
        {enableDelate && (
          <>
            <div className="card-actions justify-end">
              <button className="btn btn-primary" onClick={onDelete}>
                Delete
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
