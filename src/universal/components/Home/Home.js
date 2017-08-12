import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router-dom';

import styles from './Home.css';

class Home extends Component {
  render () {
    return (
      <div className={styles.home}>
        <h1 className={styles.title}>Django React Redux SSR</h1>

        <div>
          <h2>What is it?</h2>
          <ul>
            <li>
              <b>Django REST API</b><br />
              <p>Django REST handles the authentication and Postgresql database</p>
            </li>

            <li>
              <b>React with Redux Client</b><br />
              <p>Django serves a gzipped react app</p>
            </li>

            <li>
              <b>Waggle: Server Side Rendering</b><br />
              <p>An intermediate "waggle" server will handle the server side Rendering to Increase initial page load and SEO</p>
            </li>
          </ul>
        </div>


        <div>
          <h2>Why?</h2>
          <ul>
            <li>Performance</li>
            <li>Organization</li>
            <li>Easily extensible</li>
          </ul>
        </div>

        <div>
          <h2>How?</h2>

          <p>The Basic setup goes like this...</p>

          <ol>
            <li><p>Nginx will reverse proxy to Django at port 8000 and served static assets gzipped</p></li>
            <li><p>Django will send a post request to an Express server on port 3000 that will return the html as a string</p></li>
            <li><p>Django will serve that string; once the Javascript is loaded the application state is transferred</p></li>
          </ol>
        </div>
      </div>
    );
  }
}

export default Home;
