import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSentries } from '../actions/index';
import { fetchCurrent } from '../actions/index';

class Landing extends Component {
  componentDidMount() {
    if (!this.props.sentries.length) {
      this.props.fetchSentries();
      this.props.fetchCurrent();
    }
  }
  render() {
    return (
      <div className="landing-headline">
        <h1>THE TRUTH IS OUT THERE</h1>
        <div className="landing-link-container">
          <Link to="/sentries" className="landing-link">
            NASA monitored asteroids
          </Link>
          <Link to="/current" className="landing-link">
            Current near Earth asteroids
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sentries: state.sentries,
  current: state.current
});
const mapDispatchToProps = dispatch => ({
  fetchSentries: () => dispatch(fetchSentries()),
  fetchCurrent: () => dispatch(fetchCurrent())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
