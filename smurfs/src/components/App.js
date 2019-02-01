import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import SmurfForm from "./SmurfForm";
import Smurfs from "./Smurfs";
import { Route, NavLink, Link } from "react-router-dom";
import { getSmurfs, addSmurf, updateSmurf, deleteSmurf } from "../actions/";

const apiurl = `http://localhost:3333/smurfs`;

class App extends Component {
  // componentDidMount() {
  //   axios
  //     .get(`${apiurl}`)
  //     .then(res => {
  //       this.setState({ smurfs: res.data });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  // deleteSmurf = id => {
  //   axios
  //   .delete(`${apiurl}/${id}/`)
  //   .then(res => {
  //     this.setState({
  //       smurfs: res.data
  //     });
  //   })
  //   .catch(err => console.log(err));
  // }

  // modifySmurf = id => {
  //   this.setState({
  //      smurfupdating: `${id}`
  //   })
  //   this.props.history.push("/SmurfFactory");
  // }

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
                modifySmurf={this.props.updateSmurf}
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
  { getSmurfs, addSmurf, updateSmurf, deleteSmurf }
)(App);
