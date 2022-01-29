import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      // Agregamos el idioma que deseemos, aquí por ejemplo español.
      <Html lang="en"> 
        <Head>
          <meta name='description' content="Sergio Mosquera's personal website" />
          <link rel='icon' href='/logo.png' />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Fira+Code:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
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