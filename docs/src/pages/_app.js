import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Code from 'react-syntax-highlighter'
import syntax from 'react-syntax-highlighter/dist/cjs/styles/hljs/railscasts'

const mdComponents = {
  pre: props => <div {...props} />,
  code: props => <Code language='html' style={syntax} {...props} />,
}

export default ({ Component, pageProps }) => (
  <MDXProvider components={mdComponents}>
    <Component {...pageProps} />

    <style global jsx>{`
      @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@900&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

      html,
      body {
        padding: 0;
        margin: 0;
      }

      a,
      a:visited {
        color: #07f;
      }

      pre {
        overflow: auto;
        font-size: 13px;
        font-family: 'Source Code Pro', monospace;
        font-weight: 500;
        padding: 20px !important;
        border-radius: 8px;
      }

      p code,
      li code {
        background: #382fc520;
        font-size: 15px;
        font-family: 'Source Code Pro', monospace;
        font-weight: 500;
        padding: 4px 4px;
        border-radius: 4px;
      }

      img {
        max-width: 100%;
        border-radius: 8px;
      }

      /*! Typebase.less v0.1.0 | MIT License */
      /* Setup */
      html {
        /* Change default typefaces here */
        font-family: 'Inter', sans-serif;
        font-size: 100%;
        -webkit-font-smoothing: antialiased;
      }
      /* Copy & Lists */
      p {
        line-height: 1.5rem;
        margin-top: 1.5rem;
        margin-bottom: 0;
      }
      ul,
      ol {
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
      }
      ul li,
      ol li {
        line-height: 1.5rem;
      }
      ul ul,
      ol ul,
      ul ol,
      ol ol {
        margin-top: 0;
        margin-bottom: 0;
      }
      blockquote {
        line-height: 1.5rem;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
      }
      /* Headings */
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        /* Change heading typefaces here */
        font-family: 'Inter', sans-serif;
        margin-top: 3rem;
        margin-bottom: 0;
        line-height: 1.5rem;
      }
      h1 {
        font-size: 2.828rem;
        line-height: 3rem;
        margin-top: 3rem;
      }
      h2 {
        font-size: 1.414rem;
      }
      h3 {
        font-size: 1.107rem;
      }
      h4 {
        font-size: 1.0713333333333333rem;
      }
      h5 {
        font-size: 0.3535rem;
      }
      /* Tables */
      table {
        margin-top: 1.5rem;
        border-spacing: 0px;
        border-collapse: collapse;
      }
      table td,
      table th {
        padding: 0;
        line-height: 33px;
      }
      /* Code blocks */
      code {
        vertical-align: bottom;
      }
      /* Leading paragraph text */
      .lead {
        font-size: 1.414rem;
      }
      /* Hug the block above you */
      .hug {
        margin-top: 0;
      }
    `}</style>
  </MDXProvider>
)