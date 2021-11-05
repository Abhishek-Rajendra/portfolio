import Document, { Html, Head, Main, NextScript } from "next/document";
import { prefix } from "@components/utils";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href={`${prefix}/static/favicon.ico`} />
          <meta
            name="description"
            content="Website created using Next.js and React"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
