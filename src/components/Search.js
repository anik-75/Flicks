import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import styles from "./Search.module.css";
import { Link } from "react-router-dom";
import { search_url } from "../request";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
<FontAwesomeIcon icon={faMagnifyingGlass} />;
function Search() {
  const [query, setQuery] = useState("");
  const [searchingState, setSearchingState] = useState(false);
  const [retrieveData, setRetrieveData] = useState([]);
  useEffect(() => {
    let fetchfn = async () => {
      let fetchedObj = await axios.get(`${search_url}${query}`);
      setRetrieveData(
        fetchedObj.data.results
          .sort((a, b) => b.popularity - a.popularity)
          .slice(0, 5)
      );
    };
    if (searchingState) {
      fetchfn();
    }
  }, [query, searchingState]);

  const changeHandler = (event) => {
    if (event.target.value === "") {
      console.log("disbale");
      setSearchingState(false);
      setRetrieveData([]);
      setQuery("");
      return;
    }
    setSearchingState(true);
    setQuery(event.target.value);
  };
  const searchClickHandler = () => {
    setSearchingState(false);
    setRetrieveData([]);
    setQuery("");
    return;
  };
  console.log(query);
  return (
    <React.Fragment>
      <div>
        <div className={styles.search_container}>
          <FontAwesomeIcon
            className={styles.search_icon}
            icon={faMagnifyingGlass}
          />
          <input
            value={query}
            className={`${styles.input}
          ${!searchingState && styles.input_border}`}
            onChange={changeHandler}
          />
        </div>
        <ListGroup
          style={{ position: "absolute", width: "40rem" }}
          className={`${!searchingState && styles.search_disable}`}
        >
          {retrieveData.map((data) => {
            return (
              <Link to={`/${data.id}`} onClick={searchClickHandler}>
                <ListGroup.Item key={data.id}>
                  {data.original_title}
                </ListGroup.Item>
              </Link>
            );
          })}
        </ListGroup>
      </div>
    </React.Fragment>
  );
}

export default Search;
