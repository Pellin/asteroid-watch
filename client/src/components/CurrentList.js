import React, { Component } from 'react';
import { connect } from 'react-redux';

import CurrentItem from '../components/CurrentItem';
import { fetchCurrent } from '../actions/index';

class CurrentList extends Component {
  // componentDidMount() {
  //   if (!this.props.current.length) {
  //     this.props.fetchCurrent();
  //   }
  // }
  render() {
    return (
      <div className="asteroids-list">
        {this.props.current.map(curr => {
          return <CurrentItem key={curr.name} {...curr} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  current: state.current,
  filters: state.filters
});

const mapDispatchToProps = dispatch => ({
  fetchCurrent: () => dispatch(fetchCurrent())
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentList);
