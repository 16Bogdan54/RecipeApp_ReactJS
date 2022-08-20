import React from "react";
import { Button } from "../../components/Button";
import Card from "react-bootstrap/Card";

export const RecipeCard = ({
  thumbnail,
  heading,
  yields,
  country,
  language,
  id,
}) => {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={thumbnail}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column justify-content-between align-items-start">
        <Card.Title style={{ width: "100%" }}>{heading}</Card.Title>
        <div style={{ width: "100%" }}>
          <ul className="d-flex p-0">
            <li className="me-1">{yields}</li>
            <li className="me-1">{country}</li>
            <li className="me-1">{language}</li>
          </ul>
        </div>
        <Button buttonTypeClass="primary mx-0" to={"meal/" + id}>
          Details
        </Button>
      </Card.Body>
    </Card>
  );
};
