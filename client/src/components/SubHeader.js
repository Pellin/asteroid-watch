import React, { Component } from 'react';
import { connect } from 'react-redux';

import { sortBySize, sortByImpactProb, sortByTime } from '../actions/index';

class SubHeader extends Component {
  onSortChange = e => {
    if (e.target.value === 'Size') {
      this.props.sortBySize();
    } else if (e.target.value === 'Impact Probability') {
      this.props.sortByImpactProb();
    } else if (e.target.value === 'Time') {
      this.props.sortByTime();
    }
  };
  render() {
    return (
      <div className="sub-header">
        <div className="container">
          <div className="sub-header-content">
            <div className="sub-header-title">
              {this.props.location.pathname === '/' && 
                'Choose asteroid set'
              }
              {this.props.location.pathname === '/sentries' && (
                <p>Showing {this.props.sentries.length} asteroids</p>
              )}
              {this.props.location.pathname === '/current' && (
                <p>Showing the <span>{this.props.current.length}</span> asteroids currently closest to Earth</p>
              )}
            </div>
            {this.props.location.pathname !== '/' && 
              <div className="sub-header-form">
                <form>
                  <label>Sort by:</label>
                  <select
                    value={this.props.filters.sortBy}
                    onChange={this.onSortChange}
                  >
                    <option>Size</option>
                    <option>Impact Probability</option>
                    <option>Time</option>
                  </select>
                </form>
              </div>
          }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  current: state.current,
  sentries: state.sentries,
  filters: state.filters
});

const mapDispatchToProps = dispatch => ({
  sortBySize: () => dispatch(sortBySize()),
  sortByImpactProb: () => dispatch(sortByImpactProb()),
  sortByTime: () => dispatch(sortByTime())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubHeader);
