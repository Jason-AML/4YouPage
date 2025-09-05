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
          <div className="modal-box relative">
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
          </div>
        </dialog>
      )}
    </>
  );
};
