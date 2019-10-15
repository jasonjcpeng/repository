import React from 'react';
import { withRouter } from 'next/router'

import styles from './style.scss';

class Index extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <div className={styles.root}>about</div>
  }
}

export default withRouter(Index);
