import React from "react"
import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from "next/document"
import { GoogleFonts } from "next-google-fonts"

class MyDocument extends Document<any> {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)

        return initialProps
    }
    render() {
        return (
            <Html>
                <GoogleFonts href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" />
                <Head></Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;