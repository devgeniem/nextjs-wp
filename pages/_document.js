import Document, { Head, Main, NextScript } from 'next/document';

export default class ThemeDocument extends Document {
  render() {
    return (
      <html>
      <Head>
        <title>NextJS WP Boilerplate</title>

        <link rel="stylesheet" href="/_next/static/style.css" />

      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
      </html>
    );
  }
};
