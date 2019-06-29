import React, { Component } from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

class AsteroidItem extends Component {
  render() {
    return (
      <div>
        <div title="Show Asteroid information" className="modal__header">
          {this.props.asteroid.designation}
        </div>
        <div className="modal__body">
          <h2>Close approaches:</h2>
          {this.props.asteroid.close_approach_data.map((data => {
            return (
              <div key={data.relative_velocity.miles_per_hour} className="approach-list">
                <h3>{data.close_approach_date}:</h3>
                  <p> Miss distance to {data.orbiting_body}: {numeral(data.miss_distance.kilometers).format('0,0')} km</p>
                <p>Velocity: {numeral(data.relative_velocity.kilometers_per_second).format('0,0.00')} kilometers per second</p>
                </div>
            )
          }))}
        </div>
      </div>
    );
  }
}

export default connect()(AsteroidItem);
