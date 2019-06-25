import React from 'react';
import Layout from '../../components/layout/layout';

import { withRouter } from 'next/router';
import { fetchLocal } from '../../components/lib/fetch';
import Link from 'next/link'

import './style.scss';
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
        return <Layout title="index">
            status:{this.props.status}
            <Link href="/about"><p>Link to about</p></Link>
            <p onClick={() => { this.props.router.push('/about') }}>to about</p>
            version 2
        </Layout>
    }
}

export default withRouter(homedir);