import Head from 'next/head';

export default ({ children, title }) =>
    <Head>
        <title>{title}</title>
        <link href="static/favicon.ico" rel="shortcut icon"></link>
        <script src="static/js/remflexable.js"></script>
        <script dangerouslySetInnerHTML={{ __html: 'rembox.config({design_width: 1024})' }}></script>
        {children}
    </Head>