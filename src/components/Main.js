import React from "react";
import Banner from "./Banner";
import Row from "./Row";
import requests from "../request";

function Main() {
  return (
    <React.Fragment>
      <Banner fetchurl={requests[0].Popular} />
      {requests.map((request) => {
        return (
          <Row
            key={Object.keys(request)[0]}
            title={Object.keys(request)[0]}
            fetchurl={request[Object.keys(request)[0]]}
          />
        );
      })}
    </React.Fragment>
  );
}

export default Main;
