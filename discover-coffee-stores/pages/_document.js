import Document, { Html, Main, NextScript, Head } from "next/document";

class MyDocument extends Document {
    render () {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <meta property="og:title" content="Coffee Connoisseur" key="title" />
                    <meta property="og:description" content="Discover your local coffee shops" key="description" />
                    <meta name="description" content="Discover your local coffee shops" />
                    <link rel="icon" href="/favicon.png" />
                    <link rel="preload" href="/fonts/IBMPlexSans-Bold.ttf" as="font" crossOrigin="anonymous" />
                    <link rel="preload" href="/fonts/IBMPlexSans-Regular.ttf" as="font" crossOrigin="anonymous" />
                    <link rel="preload" href="/fonts/IBMPlexSans-SemiBold.ttf" as="font" crossOrigin="anonymous" />
                </Head>
                <body>
                    <Main></Main>
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;