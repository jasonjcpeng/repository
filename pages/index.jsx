import React from 'react';
import { withRouter } from 'next/router';
import fetch from 'axios';
import Link from 'next/link'
class homedir extends React.Component {
    constructor() {
        super();
    }

    static async getInitialProps(ctx){
        const res = await fetch.get('http://image.9game.cn/2017/11/24/18667950_.png');
        return {status:res.status};
    }
    
    componentDidMount(){
        const {router} = this.props;
        router.prefetch('/about');
    }
    
    render() {
        return <div>
            <Header></Header>
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
