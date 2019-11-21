import React from 'react';

import entry from '@entry';
import { Post, Get } from '@fetch';
import Link from 'next/link'

import styles from './style.scss';
class homedir extends React.Component {
  constructor() {
    super();
    this.state = {
      followStatus: ''
    }
  }

  static async getInitialProps(ctx) {
    const res = await Post('/follow/post', {
      args1: '[POST]Hello'
    });
    return { followStatus: res.result };
  }

  getFollowStatus = () => {

    Get('/follow/get', {
      args1: '[GET]Hello'
    }).then(res => {
      this.setState({
        followStatus: res.result
      })
    });
  }

  componentDidMount() {
    const { router } = this.props;
    router.prefetch('/about');
  }

  render() {
    return <div className={styles.root}>
      status:{this.props.status}
      <Link href="/about"><p >Link to about</p></Link>
      <p onClick={() => { this.props.router.push('/about') }}>to about</p>
      <p onClick={this.getFollowStatus}>get followStatus:{this.state.followStatus} </p>
      <p>from ssr:{this.props.followStatus}</p>
      version 2
    </div >
  }
}

export default entry({ title: 'index' })(homedir);