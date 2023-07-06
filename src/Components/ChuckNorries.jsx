import React, { useEffect, useState } from "react";
import "./ChuckNorries.css";
import axios from "axios";

export const ChuckNorries = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [name, setName] = useState({});

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://api.chucknorris.io/jokes/categories"
      );
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleClick = async (el) => {
    try {
      const response = await axios.get(
        `https://api.chucknorris.io/jokes/random?category=${el}`
      );
      setName(response.data);
    } catch (err) {
      console.log(err);
    }

    openModal();
  };

  return (
    <>
      <h1 style={{ color: "#25b964" }}>Chuck Norries</h1>
      <div className="mainBox">
        {data.map((el) => (
          <div
            onClick={() => handleClick(el)}
            className="container"
            key={el.id}
          >
            <div className="nameHead">{el}</div>
            <div className="content">Unlimited Jokes on {el}</div>
          </div>
        ))}

        {isOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <h1>{name.categories[0]}</h1>
              <div className="modelBox">
                <h2>{name.value}</h2>
                <button>Next Joke</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
