import { motion } from "framer-motion";

export const Modal = ({
  title,
  description,
  image,
  closeModal,
  showModal,
  category,
}) => {
  return (
    <>
      {showModal && (
        <dialog id="modal-product" className="modal" open>
          <motion.div
            initial={{ opacity: 0, y: 1000 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 0.4,
            }}
            className="modal-box relative"
          >
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={closeModal}
              aria-label="Close modal"
            >
              ✕
            </button>
            <figure>
              <img src={image} alt="" />
            </figure>
            <h3 className="text-lg font-bold">{title}</h3>
            <p>
              <strong>{category}</strong>
            </p>
            <p className="py-4">{description}</p>
          </motion.div>
        </dialog>
      )}
    </>
  );
};
