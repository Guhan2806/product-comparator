import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
const Home = () => {
  const [search, setsearch] = useState("");
  const [flipkart, setflipkart] = useState([]);
  const [amazon, setamazon] = useState([]);
  const navigate = useNavigate();
  var { isFetching } = useQuery(["res"], async () => {
    return axios
      .get("http://localhost:5000/home")
      .then((res) => {
        setflipkart(res.data.flipkart);
        setamazon(res.data.amazon);
        console.log(res);
      })
      .then(() => {
        return 1;
      });
  });
  return (
    <div className="home">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Enter the product"
        onChange={(e) => {
          setsearch(e.target.value);
        }}
      ></input>
      <button
        type="submit"
        className="btn"
        onClick={() => navigate("/result", { state: { search } })}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
      {isFetching ? (
        <div className="loader"></div>
      ) : (
        <div>
          <h1>Top Offers</h1>
          <div>
            <h1>Flipkart</h1>
            <div className="scrollmenu">
              {flipkart.map((flip, i) => (
                <div className="scrl_item">
                  <h4 key={i}>{flip.title}</h4>
                  <img src={flip.img} alt="Product" className="img" />
                  <p className="price">Price: {flip.price}</p>
                  <a
                    className="visit"
                    href={flip.f_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h1>Amazon</h1>
            <div className="scrollmenu">
              {amazon.map((amaz, i) => (
                <div className="scrl_item">
                  <img src={amaz.img} alt="Product" className="img" />
                  {amaz.price}
                  <a
                    className="visit"
                    href={amaz.a_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Home;