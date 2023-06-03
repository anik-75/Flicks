import React, { useState } from "react";
import { useEffect } from "react";
import Nav from "./Nav";
import requests from "../request";
import axios from "axios";
let base_url = "https://image.tmdb.org/t/p/original";
function FavoriteList() {
  let fetchurl = requests.popular;
  const [watchlist, setWatchlist] = useState([]);
  useEffect(() => {
    let fetchedObj = async function () {
      let obj = await axios.get(fetchurl);
      // console.log(obj.data.results);
      setWatchlist(obj.data.results[0]);
    };

    fetchedObj();
  }, [fetchurl]);
  // const movieWatch = watchlist;
  let id = watchlist.id;
  let poster = watchlist.poster_path;
  let title = watchlist.original_title;
  return (
    <React.Fragment>
      <Nav />
      <div>
        <ul>
          <li>
            {id}
            <img
              style={{ width: "75px", borderRadius: "50%", height: "75px" }}
              src={`${base_url}${poster}`}
            />
            {title}
          </li>
          <li>
            {id}
            <img
              style={{ width: "75px", borderRadius: "50%", height: "75px" }}
              src={`${base_url}${poster}`}
            />
            {title}
          </li>
          <li>
            {id}
            <img
              style={{ width: "75px", borderRadius: "50%", height: "75px" }}
              src={`${base_url}${poster}`}
            />
            {title}
          </li>
          <li>
            {id}
            <img
              style={{ width: "75px", borderRadius: "50%", height: "75px" }}
              src={`${base_url}${poster}`}
            />
            {title}
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default FavoriteList;
