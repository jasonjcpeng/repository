import React from 'react';
import entry from '@entry';

import styles from './style.scss';

class Home extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <div className={styles.root}>about</div>
  }
}

export default entry()(Home);
