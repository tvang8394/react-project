import React, { Component } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import "./App.css";
import Footer from "./components/Footer";
import SideNav from "./components/SideNav";
import PlayerStats from "./components/PlayerStats";
import FindPlayers from "./components/FindPlayers";
import Tournament from "./Tournament";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";
import FindPlayerForm from "./components/FindPlayerForm";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-8">
              <Header />
              <Switch>
                <Route path='/Home' component={Home} />
                <Route path='/PlayerStats' component={PlayerStats} />
                <Route path='/FindPlayers' component={FindPlayers} />
                <Route path='/Tournament' component={Tournament} />

                {/* <Home /> */}
                {/* <PlayerStats /> */}
                {/* <FindPlayers /> */}
                <Tournament />
                <Footer />
              </Switch>
            </div>
            <div className="col-sm-4 text-center">
              <SideNav />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
