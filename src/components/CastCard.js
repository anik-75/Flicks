import React from "react";
import styles from "./CastCard.module.css";
import { img_url } from "../request";
import { Card } from "react-bootstrap";

function CastCard({ castImg, name, characterName }) {
  return (
    <React.Fragment>
      <Card className={styles.card}>
        <Card.Img
          variant="top"
          src={`${img_url}${castImg}`}
          className={styles.castImg}
          // style={{ width: "286px", heigth: "180px" }}
        />
        <Card.Body className={styles.card_body}>
          <Card.Title className={styles.card_title}>{name}</Card.Title>
          <Card.Text className={styles.card_text}>{characterName}</Card.Text>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}

export default CastCard;
