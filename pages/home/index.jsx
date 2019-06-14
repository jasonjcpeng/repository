import React from 'react';
import { withRouter } from 'next/router'

import './style.scss';

class Index extends React.Component {
    constructor() {
        super();
    }
    render() {
        return <div>about</div>
    }
}

export default withRouter(Index);
