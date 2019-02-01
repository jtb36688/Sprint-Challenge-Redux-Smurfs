import React from "react";

import Smurf from "./Smurf";

class Smurfs extends React.Component {
  componentDidMount = () => {
    this.props.clearUpdating();
  };
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul className="SmurfsList">
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                modifySmurf={this.props.modifySmurf}
                deleteSmurf={this.props.deleteSmurf}
                name={smurf.name}
                id={smurf.id}
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

Smurf.defaultProps = {};

export default Smurfs;
