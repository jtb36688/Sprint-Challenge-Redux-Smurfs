import React from "react";

import Smurf from "./Smurf";

class Smurfs extends React.Component {
  componentDidMount = () => {
    this.props.getSmurfs();
  };
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul className="SmurfsList">
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                updateSmurf={this.props.updateSmurf}
                deleteSmurf={this.props.deleteSmurf}
                name={smurf.name}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}


export default Smurfs;
