import React, { Component } from 'react';
import { connect } from 'react-redux';

class AsteroidItem extends Component {
  render() {
    return (
      <div>
        <div title="Show Asteroid information" className="modal__header">
          {this.props.asteroid.designation}
        </div>
        <div className="modal__body">
          <p>This asteroid is {this.props.asteroid.estimated_diameter.meters.estimated_diameter_max} meter in diameter.</p>
          <h3>Close approaches:</h3>
        </div>
      </div>
    );
  }
}

export default connect()(AsteroidItem);
