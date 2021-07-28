import Document, {Head, Html, Main, NextScript} from 'next/document';

class MyDocument extends Document {

  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {...initialProps};
  }

  render() {
    return <Html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/images/favicon.png"/>
      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
    </Html>;
  }
}

export default MyDocument;