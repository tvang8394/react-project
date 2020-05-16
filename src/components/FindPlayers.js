import React, { Component } from "react";
import SimpleMap from "./SimpleMap";
import { Form } from "reactstrap";
import FindPlayerForm from './FindPlayerForm';

class FindPlayers extends Component {
  render() {
    return (
      <div className="col">
        <h2>Find Players</h2>
        <FindPlayerForm />
        <SimpleMap />
      </div>
    );
  }
}

export default FindPlayers;
