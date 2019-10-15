import React from 'react';

import entry from '@entry';
import { fetchLocal } from '@fetch';
import Link from 'next/link'

import styles from './style.scss';
class homedir extends React.Component {
  constructor() {
    super();
  }

  // static async getInitialProps(ctx) {
  //     const res = await fetchLocal.get('/api/follow');
  //     return { status: res.status };
  // }

  componentDidMount() {
    const { router } = this.props;
    router.prefetch('/about');
  }

  render() {
    return <div className={styles.root}>
      status:{this.props.status}
      <Link href="/about"><p >Link to about</p></Link>
      <p onClick={() => { this.props.router.push('/about') }}>to about</p>
      version 2
    </div>
  }
}

export default entry({ title: 'index' })(homedir);