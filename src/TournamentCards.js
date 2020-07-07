import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import { ListGroup, ListGroupItem } from "reactstrap";

const TournamentCards = (props) => {
  return (
    <Card body className="my-2">
      <CardTitle>Tournament Name (1v1,2v2)</CardTitle>
      <CardText>
        <ListGroup>
          <ListGroupItem>Number of Entries: {props.entry}</ListGroupItem>
          <ListGroupItem>Date of: {props.startDate}</ListGroupItem>
          <ListGroupItem>Bracket: {props.bracket}</ListGroupItem>
          <ListGroupItem>Status: {props.status}</ListGroupItem>
          <ListGroupItem>Close: {props.closeDate}</ListGroupItem>
        </ListGroup>
      </CardText>
      <Button className="btn btn-warning">Join</Button>
    </Card>
  );
};

export default TournamentCards;
