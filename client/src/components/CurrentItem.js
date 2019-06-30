import React, { Component } from 'react';
import moment from 'moment';
import numeral from 'numeral';

import AsteroidModal from '../components/AsteroidModal';

class CurrentItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal = () => {
    this.setState({ isOpen: true });
  };
  closeModal = () => {
    this.setState({ isOpen: false });
  };
  render() {
    return (
      <div className="asteroid-item" key={this.props.name}>
        <div onClick={this.openModal} className="asteroid-item__header">
          <h1>{this.props.name}</h1>
          <h3>
            {this.props.orbitData.orbit_class &&
              this.props.orbitData.orbit_class.orbit_class_type}
          </h3>
        </div>
        <div className="asteroid-item__body">
          <p>
            Estimated diameter:{' '}
            {numeral(
              (this.props.diameter.meters.estimated_diameter_max +
                this.props.diameter.meters.estimated_diameter_max) /
                2
            ).format('0,0')}{' '}
            meters
          </p>
          <p>Magnitude: {this.props.magnitude}</p>
          <p>
            Closest:{' '}
            {numeral(
              this.props.closeApproach[0].miss_distance.kilometers
            ).format('0,0')}{' '}
            kilometers at{' '}
            {moment(
              this.props.closeApproach[0].epoch_date_close_approach
            ).format('MMMM Do h:mm:ss a')}
          </p>
          <p>
            Minimum orbit intersection:{' '}
            {this.props.orbitData.minimum_orbit_intersection} AU (
            {numeral(
              this.props.orbitData.minimum_orbit_intersection * 149597870.7
            ).format('0,0')}{' '}
            kilometers)
          </p>
          <p>
            {this.props.sentry
              ? 'This is a sentry object'
              : 'This is not a sentry object'}
          </p>
          <p>
            {this.props.hazardous
              ? 'It is considered potentially hazardous in the long run'
              : 'It is not considered hazardous'}
          </p>
          <a
            href={this.props.url}
            style={{
              color: 'white',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
          >
            Go to asteroid ->
          </a>
        </div>
        <AsteroidModal
          closeModal={this.closeModal}
          isOpen={this.state.isOpen}
          id={this.props.id}
          name={this.props.name}
        />
      </div>
    );
  }
}

export default CurrentItem;
