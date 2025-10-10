import { useContext, useState } from "react";
import ProductContext from "../context/ProductContext";
import { Modal } from "./modal/Modal";

export const Card = ({
  product,
  enableActions = true,
  enableDelate = true,
}) => {
  const { handleBuy, handleDelete, handleAddQuantity, handleSubtractQuantity } =
    useContext(ProductContext);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const onBuy = () => {
    handleBuy(product);
  };
  const onDelete = () => {
    handleDelete(product);
  };
  const addQuantity = () => {
    handleAddQuantity(product.id);
  };
  const substractQuantity = () => {
    handleSubtractQuantity(product.id);
  };
  return (
    <div className="card bg-base-100 w-96 h-120 shadow-sm">
      <figure className="h-100 relative ">
        <img src={product.image} alt={product.title} className="h-75" />
        <div className="flex flex-col gap-2 absolute right-5 top-5">
          <button className="btn btn-circle">
            <i className="bxr  bx-heart text-2xl"></i>
          </button>
          <button className="btn btn-circle" onClick={openModal}>
            <i class="bxr  bx-eye text-2xl"></i>
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
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p className="text-[#DB4444]">${product.price}</p>

        {enableActions && (
          <>
            <div className="card-actions justify-end">
              <button className="btn btn-primary" onClick={onBuy}>
                Buy Now
              </button>
            </div>
          </>
        )}
        {enableDelate && (
          <>
            <div className="card-actions justify-end flex">
              <div className="quantity flex items-center justify-center gap-2">
                <button
                  className="btn btn-neutral-content  w-5 h-8"
                  onClick={substractQuantity}
                >
                  -
                </button>
                <p>{product.quantity}</p>
                <button
                  className="btn btn-neutral w-5 h-8"
                  onClick={addQuantity}
                >
                  +
                </button>
              </div>
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
