import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import { ListGroup, ListGroupItem } from "reactstrap";

const TournamentCards = (props) => {
  return (
    <Row>
      <Col sm="12" md="6">
        <Card body className="my-2">
          <CardTitle>Tournament Name (1v1,2v2)</CardTitle>
          <CardText>
            <ListGroup>
              <ListGroupItem>Number of Entries: 12</ListGroupItem>
              <ListGroupItem>Date of: 5/20/2020</ListGroupItem>
              <ListGroupItem>Bracket: N/A</ListGroupItem>
              <ListGroupItem>Status: Open</ListGroupItem>
              <ListGroupItem>Close: 5/19/2020</ListGroupItem>
            </ListGroup>
          </CardText>
          <Button className="btn btn-warning">Join</Button>
        </Card>
      </Col>
      <Col sm="12" md="6">
        <Card body className="my-2">
          <CardTitle>Tournament Name (1v1,2v2)</CardTitle>
          <CardText>
            <ListGroup>
              <ListGroupItem>Number of Entries: 12</ListGroupItem>
              <ListGroupItem>Date of: 5/20/2020</ListGroupItem>
              <ListGroupItem>Bracket: N/A</ListGroupItem>
              <ListGroupItem>Status: Open</ListGroupItem>
              <ListGroupItem>Close: 5/19/2020</ListGroupItem>
            </ListGroup>
          </CardText>
          <Button>Join</Button>
        </Card>
      </Col>
      <Col sm="12" md="6">
        <Card body className="my-2">
          <CardTitle>Tournament Name (1v1,2v2)</CardTitle>
          <CardText>
            <ListGroup>
              <ListGroupItem>Number of Entries: 12</ListGroupItem>
              <ListGroupItem>Date of: 5/20/2020</ListGroupItem>
              <ListGroupItem>Bracket: N/A</ListGroupItem>
              <ListGroupItem>Status: Open</ListGroupItem>
              <ListGroupItem>Close: 5/19/2020</ListGroupItem>
            </ListGroup>
          </CardText>
          <Button className="btn btn-success">Join</Button>
        </Card>
      </Col>
      <Col sm="12" md="6">
        <Card body className="my-2">
          <CardTitle>Tournament Name (1v1,2v2)</CardTitle>
          <CardText>
            <ListGroup>
              <ListGroupItem>Number of Entries: 12</ListGroupItem>
              <ListGroupItem>Date of: 5/20/2020</ListGroupItem>
              <ListGroupItem>Bracket: N/A</ListGroupItem>
              <ListGroupItem>Status: Open</ListGroupItem>
              <ListGroupItem>Close: 5/19/2020</ListGroupItem>
            </ListGroup>
          </CardText>
          <Button className="btn btn-info">Join</Button>
        </Card>
      </Col>
    </Row>
  );
};

export default TournamentCards;
