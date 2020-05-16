import React, { Component } from "react";
import TournamentCards from "./TournamentCards";

class Tournament extends Component {
  render() {
    return (
      <div className="col">
        <h2 className="text-center">Tournamenets</h2>
        <TournamentCards />
      </div>
    );
  }
}

export default Tournament;