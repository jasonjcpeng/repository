import React from 'react';
import Head from './components/header';

import getConfig from 'next/config'
import { withRouter } from 'next/router';
import fetch from 'axios';
import Link from 'next/link'
class homedir extends React.Component {
    constructor() {
        super();
    }

    static async getInitialProps(ctx){
        const {server} = getConfig().publicRuntimeConfig;
        const res = await fetch.get(`${server}/api/follow`);
        return {status:res.status};
    }
    
    componentDidMount(){
        const {router} = this.props;
        router.prefetch('/about');
    }
    
    render() {
        return <div>
            <Head></Head>
            status:{this.props.status}
            <Link href="/about"><p>Link to about</p></Link>
            <p onClick={()=>{this.props.router.push('/about')}}>to about</p>
            version 2
        </div>
    }
}

export default withRouter(homedir);



class Header extends React.Component {
    constructor() {
        super();
    }
    render() {
        return <div >taber</div>
    }
}
