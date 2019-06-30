import React, { Component } from 'react';
import { connect } from 'react-redux';

import sortSentries from '../actions/sortSentries';
import SentryItem from './SentryItem';
import { sortBySize } from '../actions/index';

class SentryList extends Component {
  componentDidMount() {
    if (this.props.filters.sortBy !== 'Size') {
      this.props.sortBySize();
    }
  }
  render() {
    return (
      <div className="asteroids-list">
        {this.props.sentries.map(sentry => {
          return <SentryItem key={sentry.name} {...sentry} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sentries: sortSentries(state.sentries, state.filters),
  filters: state.filters
});

const mapDispatchToProps = dispatch => ({
  sortBySize: () => dispatch(sortBySize())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SentryList);
