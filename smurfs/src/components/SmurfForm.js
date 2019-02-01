import React, { Component } from 'react';
import "../App.css";
import { withRouter } from "react-router-dom";

const blankfield = {
    name: "",
    age: "",
    email: ""
  };

class SmurfForm extends Component {
    state = {
      newSmurf: blankfield
    };
  }

  componentDidMount() {
    this.props.smurfupdating ?
    this.setState({
        newSmurf: {
      name: this.props.smurfs.find(smurf => smurf.id.toString() === this.props.smurfupdating).name,
      age: this.props.smurfs.find(smurf => smurf.id.toString() === this.props.smurfupdating).age,
      height: this.props.smurfs.find(smurf => smurf.id.toString() === this.props.smurfupdating).height}
    })
    :
    this.setState({
        newSmurf: blankfield
    })
  }

  const handleSubmit = (e, data, id) => {
    e.preventDefault();
    if (!Object.values(this.state.newSmurf).includes("")) {
      if (props.smurfupdating) {
        props.updateSmurf(data, id);
        props.history.push("/");
      } else {
        props.addSmurf(data);
        props.history.push("/");
      }
    } else {
      return null;
    }
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfFormDiv">
        <form className="SmurfForm" onSubmit={e => handleSumbit(e, props.newSmurf, props.smurfupdating)}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.newSmurf.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.newSmurf.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.newSmurf.height}
            name="height"
          />
          <button type="submit">{this.props.smurfupdating ? `Transform into improved ${this.state.newSmurf.name}` : 'Add to the village'}</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SmurfForm);
