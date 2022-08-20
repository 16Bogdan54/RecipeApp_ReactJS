import React from "react";
import Card from "react-bootstrap/Card";
import "/src/assets/Global.css";

export const ReviewCard = ({ avatarUrl, username, review }) => {
  let name = username.length !== 0 ? `@${username}` : "no username";
  return (
    <Card style={{ height: "100%" }}>
      <img className="custom-img" src={avatarUrl} />
      <Card.Body>
        <Card.Title className="w-100">
          <span>Author: </span>
          {name}
        </Card.Title>
        <p className="w-100">{review}</p>
      </Card.Body>
    </Card>
  );
};
