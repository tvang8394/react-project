import React, { Component } from "react";
import ImageAvatar from "./ImageAvatars";
import NestedList from "./NestedList";
import CustomizedTables from "./CustomizedTables";
import MatchHistory from './MatchHistory';
class PlayerStats extends Component {
  render() {
    return (
      <div className="col">
        <ImageAvatar name="Player Status"/>
        <CustomizedTables />
        <ImageAvatar name="Match History"/>
        <MatchHistory name="Roger Federer"/>
        <MatchHistory name="Rafael Nadal"/>
      </div>
    );
  }
}

export default PlayerStats;
