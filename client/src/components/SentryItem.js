import React, { Component } from 'react';
import numeral from 'numeral';

import AsteroidModal from '../components/AsteroidModal';

class SentryItem extends Component {
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
          <div>
            <p>Last observed:</p>
            <p>{this.props.lastObserved.split('.')[0].trim()}</p>
          </div>
        </div>
        <div className="asteroid-item__body">
          <p>Estimated diameter: {this.props.diameter} meters</p>
          <p>
            {this.props.impacts} potential{' '}
            {this.props.impacts === '1' ? <span>impact </span> : <span>impacts </span>}
            {this.props.yearMin === this.props.yearMax ? (
              <span>in {this.props.yearMin}</span>
            ) : (
              <span>
                between {this.props.yearMin} and {this.props.yearMax}
              </span>
            )}
            .
          </p>
          <p>
            Impact probability: {this.props.impactProb}% (1 in{' '}
            {numeral(Math.round(100 / this.props.impactProb / 10) * 10).format('0,0')})
          </p>
          {this.props.palermo >= -2 && <p>Hazardous object</p>}
          <a
            href={this.props.orbitalUrl}
            style={{
              color: 'white',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
          >
            View orbit ->
          </a>
        </div>
        <AsteroidModal
          closeModal={this.closeModal}
          isOpen={this.state.isOpen}
          id={this.props.spkId}
          name={this.props.name}
        />
      </div>
    );
  }
}

export default SentryItem;

// name,
//   diameter,
//   impacts,
//   impactProb,
//   lastObserved,
//   palermo,
//   yearMin,
//   yearMax,
//   orbitalUrl
