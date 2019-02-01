import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux"
import Loader from "react-loader-spinner"
import SmurfForm from "./SmurfForm";
import Smurfs from "./Smurfs";
import { Route, NavLink, Link } from "react-router-dom";

const apiurl = `http://localhost:3333/smurfs`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      smurfupdating: ''
    };
  }

  componentDidMount() {
    axios
      .get(`${apiurl}`)
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateAppState = () => {
    this.props.history.push("/")
    setTimeout(() => {
      axios
        .get(`${apiurl}`)
        .then(res => {
          this.setState({ smurfs: res.data });
        })
        .catch(err => {
          console.log(err);
        });
    }, 500);
  };

  deleteSmurf = id => {
    axios
    .delete(`${apiurl}/${id}/`)
    .then(res => {
      this.setState({
        smurfs: res.data
      });
    })
    .catch(err => console.log(err));
  }

  modifySmurf = id => {
    this.setState({
       smurfupdating: `${id}`
    })
    this.props.history.push("/SmurfFactory");
  }

  clearUpdating = () => {
    this.setState({
      smurfupdating: ''
    })
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <nav className='NavBar'>
          <NavLink to='/'>Smurf Village</NavLink>
          <NavLink to='/SmurfFactory'>Add Smurf(s)</NavLink>
        </nav>
        <Route
          exact
          path="/"
          render={props => (
            <div>
              <Smurfs {...props} clearUpdating={this.clearUpdating} deleteSmurf={this.deleteSmurf} modifySmurf={this.modifySmurf} smurfs={this.state.smurfs} />
              <Link to="/SmurfFactory">Add New Smurf...</Link>
            </div>
          )}
        />
        <Route
          path="/SmurfFactory"
          render={props => (
            <div>
              <SmurfForm {...props} smurfs={this.state.smurfs} smurfupdating={this.state.smurfupdating} updateAppState={this.updateAppState} />
              <Link to="/">Return To Smurf Village</Link>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
