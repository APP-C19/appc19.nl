import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { format } from 'date-fns';
import styled from 'styled-components';
import { colors, breakpoints, gridPercentages, grid } from './CSSConstants';
import RenderBody from './RenderBody';

// at the moment we reused the blog component and styling,
// we're going to host this on medium so for now we do not refactor this.

const Published = styled.div`
  color: ${colors.darkGrey};
  font-size: 12px;
  line-height: 14px;
  display: inline-block;
  margin-top: 4px;
`;

const ImageHolder = styled.div`
  height: 240px;
  overflow: hidden;
  display: flex;
  align-items: center;

  @media (min-width: ${breakpoints.m.from}px) {
    height: 340px;
  }

  @media (min-width: ${breakpoints.l.from}px) {
    height: 420px;
  }
`;

const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

const BlogContainer = styled.article`
  max-width: ${grid.maxWidth}px;
  margin: 0 auto;
  padding: 0 ${gridPercentages.outsideGutterWidth}%;
`;

const Header = styled.h2`
  font-size: 36px;
  line-height: 43px;
  color: ${colors.darkGrey};
  font-weight: 300;
  margin: 0;
`;

const StyledBody = styled(RenderBody)`
  font-weight: 300;
  img {
    max-width: 100%;
  }
`;

const Content = styled.div`
  background: white;

  margin: -48px auto 100px;
  padding: 24px;
  z-index: 1;
  position: relative;

  @media (min-width: ${breakpoints.m.from}px) {
    margin-top: -100px;
  }

  @media (min-width: ${breakpoints.l.from}px) {
    width: ${gridPercentages.columnWidth * 10 +
      gridPercentages.gutterWidth * 9}%;

    margin-top: -140px;
  }

  @media (min-width: ${breakpoints.xl.from}px) {
    width: ${gridPercentages.columnWidth * 8 +
      gridPercentages.gutterWidth * 7}%;
  }
`;

const BackButton = styled.div`
  position: absolute;
  top: -${36 + 12}px;
  left: 0;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    width: 120px;
    color: ${colors.darkGrey};
    border-radius: 4px;
    text-decoration: none;
    font-size: 18px;
    font-variant: small-caps;
    transition: 0.1s ease;
    transition-property: background, color, border;

    background: ${colors.darkGrey};
    color: white;

    &:hover {
      color: white;
    }
  }

  @media (min-width: ${breakpoints.xl.to}px) {
    top: 164px;
    bottom: 0;
    left: -${164 + 24}px;

    a {
      position: sticky;
      top: 24px;
      background: transparent;
      border: 2px solid;
      color: ${colors.darkGrey};
      height: 54px;
      width: 164px;

      &:hover {
        background: ${colors.darkGrey};
        color: white;
        border-color: ${colors.darkGrey};
      }
    }
  }
`;

export default class BlogPost extends React.Component {
  render() {
    const post = this.props.post;
    const url = this.props.url;
    const headerImage = post.images[0];

    let tagComponent;
    if (post.tags && post.tags.length) {
      const tags = post.tags
        .map((tag, i) => (
          <span key={i}>
            <Link href={`/blog?tag=${tag}`} as={`/blog/tag/${tag}`}>
              <a>{tag}</a>
            </Link>
          </span>
        ))
        .reduce((acc, elem) => [acc, ', ', elem]);

      tagComponent = <span>in {tags}</span>;
    }

    return (
      <article>
        <Head>
          <title>Cafienne - collaboration in software</title>
          <meta property="og:title" content={`Cafienne – ${post.title}`} />
          <meta property="og:type" content="article" />
          <meta
            property="og:article:published_time"
            content={format(post.date, 'YYYY-MM-DD')}
          />
          <meta
            property="og:url"
            content={`http://cafienne.io${url.pathname}/${url.query.slug}`}
          />
          <meta
            property="og:image"
            content={`http://cafienne.io/${headerImage}`}
          />
        </Head>
        <ImageHolder>
          <Image src={`/${headerImage}`} alt="" />
        </ImageHolder>
        <BlogContainer>
          <Content>
            <Header>{post.title}</Header>
            <Published>
              Published {format(post.date, 'DD-MM-YYYY')}
              {post.author ? <span> by {post.author} </span> : ' '}
              {tagComponent}
            </Published>
            <StyledBody content={post} />

            <BackButton>
              <Link href="/blog">
                <a>back</a>
              </Link>
            </BackButton>
          </Content>
        </BlogContainer>
      </article>
    );
  }
}
