import Head from './header';

export default ({ children, title = 'This is the default title' }) => (
  <div>
    <Head title={title}></Head>
    {children}
    <footer>
    </footer>
  </div>
)