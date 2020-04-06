import Head from 'next/head';
import Navbar from './Navbar';

const Layout = (props) => (
  <main>
    <Head>
      <title>BitsPrice</title>
      <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="description" content="This is the Bits Coin information website"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/> 
    </Head>
    <Navbar/>
    <div className="container">
      {props.children}
    </div>
  </main>
);

export default Layout;