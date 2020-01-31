import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import "./CharacterCard.css";

export default function CharacterCard(props) {
  return (
    <div className="character-card-container">
      <Card>
        <CardImg
          top
          width="100%"
          src={props.data.image}
          alt={`${props.data.name} character image`}
          className="character-card-image"
        />
        <CardBody>
          <CardTitle>{props.data.name}</CardTitle>
          <CardSubtitle>Species: {props.data.species}</CardSubtitle>
          <CardSubtitle>Gender: {props.data.gender}</CardSubtitle>
          <CardSubtitle>Status: {props.data.status}</CardSubtitle>
          <CardSubtitle>Origin: {props.data.origin.name}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
}
