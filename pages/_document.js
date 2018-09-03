import Document, { Head, Main, NextScript } from 'next/document';
import { injectGlobal, ServerStyleSheet } from 'styled-components';

injectGlobal`
    *, *:before, *:after {
        box-sizing: border-box;
    }

    html {
        height: 100%
    }

    body {
        font-family: sans-serif;
        height: 100%
        margin: 0;
    }

    #__next {
        height: 100%;
    }
`;

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const styleElement = sheet.getStyleElement();
        const initialProps = await Document.getInitialProps(ctx);

        return { ...initialProps, styleElement };
    }

    render() {
        return (
            <html lang="en">
                <Head>
                    <title>Two Minute Warning</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                    {this.props.styleElement}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
};