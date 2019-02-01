import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} millimeters tall</strong>
      <p>{props.age} smurf years old</p>
      <div className="MappedButtons">
      <button onClick={() => props.deleteSmurf(props.id)}>Banish</button>
      <button onClick={() => props.routeUpdate(props.id)}>Transform</button>
      </div>
    </div>
  );
};


export default Smurf;
