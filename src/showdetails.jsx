import Rodal from "rodal";
import "./styles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ShowDetails = ({ match }) => {
  const [show, setShow] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/search/shows?q=all`)
      .then((response) => {
        console.log("hello");
        console.log(response.data);
        console.log(id);
        let data = response.data;
        let x = data.filter((movie) => movie.show.id == id);
        console.log(x);
        setShow(x[0].show);
        console.log(show);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Rodal
        visible={modalVisible}
        showCloseButton={false}
        width="600"
        height="300"
      >
        <form>
          <ul>
            <li>Click About Movie button for more detail</li>
            <li>You can see all kind of movies</li>
            <li>This website is free to watch</li>
            <li>visit us!</li>
          </ul>
        </form>
      </Rodal>
      <h1 className="summary">summary of the given movie is:</h1>
      <h3
        className="head"
        dangerouslySetInnerHTML={{ __html: show.summary }}
      ></h3>
      <button
        onClick={() =>
          navigate(`/name/${show.name}/${show.type}/${show.language}`)
        }
        className="button"
      >
        About Movie
      </button>

      <button onClick={() => setModalVisible(true)}>Form</button>
    </div>
  );
};

export default ShowDetails;
