import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { SideNav, TableOfContents } from '../components';

import 'prismjs';

// import language extensions for code blocks
import 'prismjs/components/prism-bash.min';
import 'prismjs/components/prism-python.min';
import 'prismjs/components/prism-typescript.min';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-shell-session';

import 'prismjs/themes/prism.css';

import '../public/globals.css';

import type { AppProps } from 'next/app';
import type { MarkdocNextJsPageProps } from '@markdoc/next.js';

// default title, description will be used if the title, description are not
// specified in the front-matter
const TITLE = 'Cloud-Native Geospatial';
const DESCRIPTION = 'Cloud-Native Geospatial is a new way of working with spatial data that is centered around a set of new standards focused on cloud-based access. ';

function collectHeadings(node, sections = []) {
  if (node) {
    if (node.name === 'Heading') {
      const title = node.children[0];

      if (typeof title === 'string') {
        sections.push({
          ...node.attributes,
          title
        });
      }
    }

    if (node.children) {
      for (const child of node.children) {
        collectHeadings(child, sections);
      }
    }
  }

  return sections;
}

export type MyAppProps = MarkdocNextJsPageProps

export default function MyApp({ Component, pageProps }: AppProps<MyAppProps>) {
  const { markdoc } = pageProps;

  let title = TITLE;
  let description = DESCRIPTION;
  if (markdoc) {
    if (markdoc.frontmatter.title) {
      title = markdoc.frontmatter.title;
    }
    if (markdoc.frontmatter.description) {
      description = markdoc.frontmatter.description;
    }
  }

  const toc = pageProps.markdoc?.content
    ? collectHeadings(pageProps.markdoc.content)
    : [];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="strict-origin" />
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="page">
        <SideNav />
        <main className="flex column">
          <Component {...pageProps} />
        </main>
        <TableOfContents toc={toc} />
      </div>
      <style jsx>
        {`
          .page {
            display: flex;
            width: 100vw;
            flex-grow: 1;
          }
          main {
            overflow: auto;
            flex-grow: 1;
            font-size: 16px;
            padding: 0 2rem 2rem;
          }
        `}
      </style>
    </>
  );
}
