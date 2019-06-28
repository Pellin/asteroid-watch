import React, { Component } from 'react';
import { connect } from 'react-redux';
import sortSentries from '../actions/sortSentries';
import SentryItem from './SentryItem';

class SentryList extends Component {
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

export default connect(mapStateToProps)(SentryList);
