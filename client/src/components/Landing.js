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
        <div className="landing-link-container">
          <div className="landing-link">
            <div className="landing-link__header">
              <Link to="/sentries" className="landing-link">
                <h2>NASA monitored asteroids</h2>
              </Link>
            </div>
            <div className="landing-link__body">
              <p>
                A list of asteroids currently listed as sentry objects by NASA
              </p>
            </div>
          </div>
          <div className="landing-link">
            <div className="landing-link__header">
              <Link to="/current" className="landing-link">
                <h2>Current near Earth asteroids</h2>
              </Link>
            </div>
            <div className="landing-link__body">
              <p>
                A list of asteroids currently close to Earth
              </p>
            </div>
          </div>
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
