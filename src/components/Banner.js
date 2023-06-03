import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Banner.module.css";
import Nav from "./Nav";
import { img_url } from "../request";
function Banner({ fetchurl }) {
  const [popularMovie, setPopularMovie] = useState([]);

  useEffect(() => {
    let fetchingfn = async function () {
      let obj = await axios.get(fetchurl);
      setPopularMovie(
        obj?.data?.results[
          Math.floor(Math.random() * obj.data.results.length - 1)
        ]
      );
    };
    fetchingfn();
  }, [fetchurl]);
  return (
    <div>
      <header
        className={styles.banner}
        style={{
          backgroundImage: `url(${img_url}${popularMovie?.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Nav />

        <div className={styles.movie_info_container}>
          <h2>{popularMovie?.title}</h2>
          <div className={styles.movie_info_buttons_container}>
            <button>Play</button>
            <button>Add to List</button>
          </div>
          <p>{popularMovie?.overview}</p>
        </div>
        <span className={styles.header__fade_bottom}></span>
      </header>
    </div>
  );
}

export default Banner;
