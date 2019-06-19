import React from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link'

class about extends React.Component {
    constructor() {
        super();
    }
    render() {
        return <div><Link href="/" prefetch><p>Link to about</p></Link>about</div>
    }
}

export default withRouter(about);
