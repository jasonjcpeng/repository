import React from 'react';
import { withRouter } from 'next/router'

class homedir extends React.Component {
    constructor() {
        super();
    }

    componentDidMount(){
        const {router} = this.props;
        router.prefetch('/about');
    }
    
    render() {
        return <div>
            <Header></Header>
            <p onClick={()=>{this.props.router.push('/about')}}>to about</p>
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
