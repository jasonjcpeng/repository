import React from 'react';
import { withRouter } from 'next/router';
import fetch from 'axios';

class homedir extends React.Component {
    constructor() {
        super();
    }

    static async getInitialProps(ctx){
        const res = await fetch.get('http://www.baidu.com');
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
