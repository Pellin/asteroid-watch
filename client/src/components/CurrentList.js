import React, { Component } from 'react';
import { connect } from 'react-redux';
import CurrentItem from '../components/CurrentItem';

class CurrentList extends Component {
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

export default connect(mapStateToProps)(CurrentList);
