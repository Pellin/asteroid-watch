import React from 'react';

const AsteroidItem = (props) => {
  return (
    <div>
      <div title="Show Asteroid information" className="modal__header">{props.asteroid.designation}</div>
      <div className="modal__body">
        <p>This asteroid is {props.asteroid.estimated_diameter.meters.estimated_diameter_max} meter in diameter.</p>
      </div>
    </div>
  )
}

export default AsteroidItem;