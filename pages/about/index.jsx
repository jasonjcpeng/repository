import React from 'react';
import entry from '@entry';
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

export default entry()(about);
