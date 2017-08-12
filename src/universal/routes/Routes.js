// Libraries
import React, {Component, PropTypes} from  'react';
import {Route, Redirect} from 'react-router';

// Routes
// For Development only
import * as RouteMap from '../routes/static.js';

// This is used in production for code splitting via `wepback.config.server.js`
// import * as RouteMap from 'universal/routes/async.js';

// Containers
import AppContainer from '../containers/App/AppContainer.js';
// import PrivateRouteContainer from 'universal/containers/PrivateRoute/PrivateRouteContainer.js';

class Routes extends Component {
  render () {
    const {
      location
    } = this.props;

    return (
      <AppContainer>
          <Route location={location} path='*' component={RouteMap.Navigation}/>
          <Route exact location={location} path='/' component={RouteMap.Home} />
          <Route exact location={location} path='/login' component={RouteMap.Login} />
          <Route exact location={location} path='/signup' component={RouteMap.Signup} />
      </AppContainer>
    );
  }
}

export default Routes;
