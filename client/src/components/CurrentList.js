import React, { Component } from 'react';
import { connect } from 'react-redux';

import CurrentItem from '../components/CurrentItem';
import sortCurrent from '../actions/sortCurrent';
import { sortBySize } from '../actions/index';

class CurrentList extends Component {
  componentDidMount() {
    if (this.props.filters.sortBy !== 'Size') {
      this.props.sortBySize();
    }  
  }
  render() {
    console.log(this.props.filters.sortBy);
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
  current: sortCurrent(state.current, state.filters),
  filters: state.filters
});

const mapDispatchToProps = dispatch => ({
  sortBySize: () => dispatch(sortBySize()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentList);
