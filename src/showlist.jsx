import "./styles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ShowDetails from "./showdetails";
import { useNavigate } from "react-router-dom";

const ShowList = () => {
  const [shows, setShows] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => {
        setShows(response.data);
        console.log(shows);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="ShowList">
      <h1 className="hea">TV Shows</h1>
      {shows.map((show) => (
        <div key={show.show.id}>
          <h2>{show.show.name}</h2>
          <img src={show.show?.image?.medium} alt="image" />
          {/* <p>{show.show.summary}</p> */}
          <button
            onClick={() => navigate(`${show.show.id}`)}
            className="button1"
          >
            Show Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default ShowList;
