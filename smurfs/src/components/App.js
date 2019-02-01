import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import SmurfForm from "./SmurfForm";
import Smurfs from "./Smurfs";
import { Route, NavLink, Link } from "react-router-dom";
import { getSmurfs, addSmurf, updateSmurf, deleteSmurf, setUpdate } from "../actions/";

class App extends Component {
  routeUpdate = id => {
    console.log('smurf id', id)
    this.props.setUpdate(id);
    this.props.history.push("/SmurfFactory/");
  };

  render() {
    return (
      <div className="App">
        <nav className="NavBar">
          <NavLink to="/">Smurf Village</NavLink>
          <NavLink to="/SmurfFactory">Add Smurf(s)</NavLink>
        </nav>
        <Route
          exact
          path="/"
          render={props => (
            <div>
              <Smurfs
                {...props}
                getSmurfs={this.props.getSmurfs}
                deleteSmurf={this.props.deleteSmurf}
                routeUpdate={this.routeUpdate}
                smurfs={this.props.smurfs}
              />
              <Link to="/SmurfFactory">Add New Smurf...</Link>
            </div>
          )}
        />
        <Route
          path="/SmurfFactory"
          render={props => (
            <div>
              <SmurfForm
                {...props}
                smurfs={this.props.smurfs}
                smurfupdating={this.props.smurfupdating}
                addSmurf={this.props.addSmurf}
                updateSmurf={this.props.addSmurf}
              />
              <Link to="/">Return To Smurf Village</Link>
            </div>
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfupdating: state.updateId,
  smurfs: state.smurfs
});

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf, updateSmurf, deleteSmurf, setUpdate }
)(App);
