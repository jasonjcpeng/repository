import Head from './header';

export default ({ children, title = 'This is the default title' }) => (
  <React.Fragment>
    <Head title={title}></Head>
    {children}
    <footer>
    </footer>
  </React.Fragment>
)