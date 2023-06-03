import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api_key, baseurl, img_url } from "../request";
import styles from "./MoviePage.module.css";
import CastCard from "./CastCard";
import { ProgressBar } from "react-bootstrap";
import Nav from "./Nav";
function MoviePage() {
  const [movie, setMovie] = useState({});
  const [casts, setCasts] = useState([]);
  const [director, setDirector] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    let fetch_fn = async function () {
      let fetchedObj = await axios.get(
        `${baseurl}/movie/${id}?api_key=${api_key}`
      );
      let castFetchObj = await axios.get(
        `${baseurl}/movie/${id}/credits?api_key=${api_key}`
      );
      setMovie(fetchedObj.data);
      setCasts(castFetchObj.data.cast);
      setDirector(
        castFetchObj.data.crew.filter((crew) => {
          return crew.job === "Director";
        })
      );
    };
    fetch_fn();
  }, [id]);
  return (
    <React.Fragment>
      <Nav />
      <div
        style={{
          backgroundImage: `url(${img_url}${movie?.backdrop_path})`,
          backgroundSize: "cover",
        }}
        className={styles.outer_container}
      >
        <div className={styles.moviepage_info_container}>
          <img
            src={`${img_url}${movie.poster_path}`}
            className={styles.moviepage_poster}
            alt="movie poster"
          />
          <div className={styles.moviepage_plot_container}>
            <h1 className={styles.movie_title}>{movie.title}</h1>
            <div className={styles.movie_overview_container}>
              <h2>Plot</h2>
              <p className={styles.overview}>{movie.overview}</p>
            </div>
            <div className={styles.genre_container}>
              <h3>Genre</h3>
              {movie?.genres?.map((genre) => {
                return <span key={genre.id}>{genre.name}</span>;
              })}
            </div>
            <div className={styles.ratings_container}>
              <h3>Ratings</h3>
              <ProgressBar
                now={movie?.vote_average * 10}
                variant="success"
                visuallyHidden
              />
            </div>
            <div>
              <h3>Director</h3>
              {director.map((director) => {
                return <span key={director.id}>{director.name}</span>;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cast_container}>
        {casts.map((cast) => {
          return (
            <CastCard
              key={cast.id}
              castImg={cast?.profile_path}
              name={cast?.original_name}
              characterName={cast?.character}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default MoviePage;
