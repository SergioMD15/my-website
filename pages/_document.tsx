import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      // Agregamos el idioma que deseemos, aquí por ejemplo español.
      <Html lang="en"> 
        <Head>
          <meta name='description' content="Sergio Mosquera's personal website" />
          <link rel='icon' href='/logo.png' />
        </Head>
        <body className='bg-light-blue'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;