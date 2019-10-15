import React from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link'

import styles from './style.scss';

class about extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <div className={styles.root}>
      <Link href="/" prefetch>
        <p>Link to about</p>
      </Link>
      about
    </div>
  }
}

export default withRouter(about);
