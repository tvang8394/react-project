import React, { Component } from "react";
import {
  Button,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import HorizontalLinearStepper from "./HorizontalLinearStepper";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">What we do:</h1>
            <p className="text-center">
              Culpa nulla aliqua sint veniam nisi non velit aute nostrud et eu.
              Laborum velit ea ut exercitation reprehenderit nostrud
              reprehenderit pariatur sint nostrud. Eiusmod incididunt elit enim
              Lorem reprehenderit incididunt eiusmod.
            </p>
            <HorizontalLinearStepper />

          </div>

          

          <div className="col-md-4 mx-auto">
            <Card>
              <CardImg top width="100%" />
              <CardBody>
                <CardTitle>Join Now</CardTitle>
                <CardSubtitle>Steps</CardSubtitle>
                <CardText>
                   consequat pariatur enim dolor laboris. Deserunt incididunt aute tempor sunt sit elit quis. Commodo aute deserunt magna veniam anim excepteur fugiat quis ullamco Lorem incididunt eu laboris. Lorem do commodo id eu sunt est veniam fugiat velit fugiat sunt pariatur voluptate culpa. Lorem non ut reprehenderit magna fugiat cupidatat. Tempor reprehenderit qui elit occaecat aliqua laborum enim labore. Officia incididunt sint culpa labore consectetur veniam cillum laborum dolor.
                </CardText>
                <Button className="btn btn-lg btn-danger mx-auto">
                  Register
                </Button>
              </CardBody>
            </Card>
          </div>

          <div className="col-md-4 mx-auto">
            <Card>
              <CardImg top width="100%"/>
              <CardBody>
                <CardTitle>Welcome Back</CardTitle>
                <CardSubtitle>News</CardSubtitle>
                <CardText>
                  Ex elit ipsum ullamco ad laborum nulla fugiat tempor non. Lorem eu exercitation cupidatat aliqua excepteur. Est id velit cupidatat est dolor tempor minim proident labore velit laboris laboris. Ad aute Lorem sint est minim culpa deserunt eiusmod veniam aliquip sit velit proident. Exercitation officia amet dolore voluptate ut nulla culpa enim excepteur cupidatat in. Anim voluptate officia sunt exercitation sunt.
                </CardText>
                <Button className="btn btn-lg btn-success mx-auto">
                  Login
                </Button>
              </CardBody>
            </Card>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
