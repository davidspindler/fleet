import React, { useState } from "react";

const Modal = ({ modal, toggleModal, title, information }) => {
  return (
    modal && (
      <div className="hide">
        <div className="modal">
          <h3 className="black-text">{title}</h3>

          <h3 className="black-text">{information}</h3>
          <button onClick={toggleModal}>close</button>
        </div>
      </div>
    )
  );
};

export default Modal;
