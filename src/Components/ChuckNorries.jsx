import React, { useState } from "react";
import "./ChuckNorries.css";

export const ChuckNorries = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="mainBox">
      <div className="container" onClick={openModal}></div>
      <div className="container" onClick={openModal}></div>
      <div className="container" onClick={openModal}></div>
      <div className="container" onClick={openModal}></div>
      <div className="container" onClick={openModal}></div>
      <div className="container" onClick={openModal}></div>
      <div className="container" onClick={openModal}></div>
      <div className="container" onClick={openModal}></div>
      <div className="container" onClick={openModal}></div>
      <div className="container" onClick={openModal}></div>
      <div className="container" onClick={openModal}></div>
      <div className="container" onClick={openModal}></div>
      <div className="container" onClick={openModal}></div>
      <div className="container" onClick={openModal}></div>
      <div className="container" onClick={openModal}></div>
      <div className="container" onClick={openModal}></div>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Modal Title</h2>
            <p>This is the modal content.</p>
          </div>
        </div>
      )}
    </div>
  );
};
