import React, { Component } from "react";
import TournamentCards from "./TournamentCards";

class Tournament extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <TournamentCards
              entry="12"
              startDate="7/7/20"
              bracket="Beginners"
              status="Open"
              closeDate="7/30/20"
            />
            <TournamentCards
              entry="10"
              startDate="7/7/20"
              bracket="Advance"
              status="Open"
              closeDate="7/30/20"
            />
          </div>
          <div className="col-6">
            <TournamentCards
              entry="20"
              startDate="7/7/20"
              bracket="All Level"
              status="Open"
              closeDate="7/30/20"
            />
            <TournamentCards
              entry="25"
              startDate="7/7/20"
              bracket="All Levels"
              status="Open"
              closeDate="7/30/20"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Tournament;
