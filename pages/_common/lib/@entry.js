/**
 * React 页面级组件入口函数（科里化）
 * (组件)({参数})
 * @param {string}title 页面title
 */
import { withRouter } from 'next/router';
import Layout from '@common/layout/layout';
import React from 'react';


export default (args) => {
  return (Components) => {
    const { title } = args || {};
    class Container extends React.Component {
      constructor() {
        super();
      }

      static async getInitialProps(ctx) {
        return await Components.getInitialProps ? Components.getInitialProps(ctx) : {};
      }


      render() {
        return <Layout title={title || ''}>
          <Components {...this.props} ></Components>
        </Layout>
      }
    }
    return withRouter(Container)
  }
}

