import React, { Component } from "react";
import ImageAvatar from "./ImageAvatars";
import NestedList from "./NestedList";
import CustomizedTables from "./CustomizedTables";
import MatchHistory from './MatchHistory';
class PlayerStats extends Component {
  render() {
    return (
      <div className="col">
        <ImageAvatar />
        <CustomizedTables />
        <ImageAvatar />
        <MatchHistory />
      </div>
    );
  }
}

export default PlayerStats;
