import React from 'react';
import Head from './components/header';

import { withRouter } from 'next/router';
import {fetchLocal} from './lib/fetch';
import Link from 'next/link'
class homedir extends React.Component {
    constructor() {
        super();
    }

    static async getInitialProps(ctx){
        const res = await fetchLocal.get('/api/follow');
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
