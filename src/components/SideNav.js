import React, { Component } from "react";
import { Button } from "reactstrap";
import SimpleTable from "./SimpleTable";
import NestedList from "./NestedList";
import MediaCard from "./MediaCard";
import {  Link } from 'react-router-dom';

class SideNav extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="row">
          <div className="col">
            <h3 className="text-center">Home</h3>
            
            <Button className="mt-2 w-100 btn btn-danger"> Register</Button>
            <Button className="mt-2 w-100 btn btn-success"> Login</Button>
            <Link to="/Home" className="btn btn-info my-2 w-100">Home Page</Link>


          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3 className="text-center">Player Stats</h3>
            <div className="table-data">
              <SimpleTable />
            </div>
            <Link to="/PlayerStats" className="btn btn-lg btn-info my-2">View More</Link>

          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3 className="text-center">Find Palyers</h3>
            <div className="player-list">
              <NestedList />
            </div>
            <Link to="/FindPlayers" className="btn btn-lg btn-warning my-2">View More</Link>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3 className="text-center">Tournaments</h3>
          </div>
          <div className="chips mx-auto">
            <MediaCard />
          </div>
          <div className="col">
            <h5 className="text-center">Social</h5>
            <a
              className="btn btn-social-icon btn-instagram"
              href="http://instagram.com/"
            >
              <i className="fa fa-instagram" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-facebook"
              href="http://www.facebook.com/"
            >
              <i className="fa fa-facebook" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-twitter"
              href="http://twitter.com/"
            >
              <i className="fa fa-twitter" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-google"
              href="http://youtube.com/"
            >
              <i className="fa fa-youtube" />
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SideNav;
