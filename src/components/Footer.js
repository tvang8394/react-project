import React from "react";
import { Jumbotron } from "reactstrap";

export default function Footer(props) {
  return (
    <React.Fragment>
    <Jumbotron fluid className="w-100 row">
      <div className="col-sm-4">
        {/* Add Social, */}
        <h5>Let's Play Tennis</h5>
      </div>
      <div className="col-sm-4">
        {/* Add Contact,  */}
        <h5>Contact Us:</h5>
        <i className="fa fa-phone"><p>456-769</p></i>
      </div>
      <div className="col-sm-4">
        {/* Add Links to other Nav, Logo? */}
        <h5>Copyright @ LPT</h5>
      </div>
      </Jumbotron>
    </React.Fragment>
  );
}
