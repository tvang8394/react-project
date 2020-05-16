import React, { Component } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import "./App.css";
import Footer from "./components/Footer";
import SideNav from "./components/SideNav";
import PlayerStats from "./components/PlayerStats"
import FindPlayers from "./components/FindPlayers";
import Tournament from "./Tournament";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-8">
            <Header />
            {/* <Home /> */}
            {/* <PlayerStats /> */}
            {/* <FindPlayers /> */}
            <Tournament />
            <Footer />
          </div>
          <div className="col-sm-4 text-center">
            <SideNav />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
