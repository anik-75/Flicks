import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Row.module.css";
import { Link } from "react-router-dom";
import { img_url } from "../request";
function Row({ fetchurl, title, islargerRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let fetchedObj = async function () {
      let obj = await axios.get(fetchurl);
      setMovies(obj.data.results);
    };

    fetchedObj();
  }, [fetchurl]);
  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.row_container}>
        {movies?.map((movie) => {
          return (
            <Link
              to={`${movie.id}`}
              key={movie.id}
              className={`${styles.movie_poster}
              `}
            >
              <img
                alt={movie.title}
                key={movie.id}
                src={`${img_url}${movie.poster_path}`}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Row;
