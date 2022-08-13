import React, { useEffect, useState } from "react";
export const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem("header")) {
      setTimeout(() => {
        setShowModal(true);
      }, 1000);
    }
  }, []);

  const modalController = () => {
    setShowModal(showModal ? false : true);
  };

  return (
    <>
      <input
        checked={showModal ? true : false}
        type="checkbox"
        id="my-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg text-center">CV Example</h3>
          <img className="shadow-md" src="/img/CV-Pak-Long-Simin-1.png" />
          <p className="py-2 text-xs md:text-md">Enjoy guys!</p>
          <div className="modal-action">
            <label onClick={modalController} htmlFor="my-modal" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
