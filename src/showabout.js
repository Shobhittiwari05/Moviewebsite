import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const ShowAbout = ({ match }) => {
  let { name, type, language } = useParams();

  console.log(name);

  //useEffect(() => {}, []);

  return (
    <div>
      <h2 className="name"> Name of given movie is: {name}</h2>
      <h2 className="name">Type of given movie is: {type}</h2>
      <h2 className="name">Language is: {language}</h2>
    </div>
  );
};

export default ShowAbout;
