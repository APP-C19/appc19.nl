import Link from 'next/link';
import { format } from 'date-fns';
import styled from 'styled-components';
import content from '../../../content';
import {
  Container,
  Subheader,
  Article as Post,
  Content,
  StyledHtml
} from './ArticleList';

const Published = styled.span`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: 12px;
  line-height: 14px;
  display: inline-block;
  margin-top: 4px;
`;
const ImageHolder = styled.div`
  height: 160px;
  overflow: hidden;
`;

const StyledLink = styled.a`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const BackLink = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -48px;
  margin-bottom: 48px;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Posts = Container.extend`
  margin: 22px auto 100px;
`;

export default ({ tag }) => {
  const posts = tag
    ? content.blog.filter(post => post.tags.includes(tag))
    : content.blog;

  return (
    <div>
      <Posts>
        {posts
          .sort(({ date: a }, { date: b }) => {
            if (a < b) {
              return 1;
            } else if (a > b) {
              return -1;
            }
            return 0;
          })
          .map(
            ({
              title,
              date,
              author,
              images,
              descriptionHtml,
              external,
              tags,
              meta: { slug }
            }) => (
              <Link href={`/blog/${slug}`} key={`blog-${slug}`}>
                <Post>
                  <ImageHolder>
                    <Image src={`/${images[0]}`} alt="" />
                  </ImageHolder>
                  <Content>
                    <Subheader>{title}</Subheader>
                    <Published>
                      on {format(date, 'DD-MM-YYYY')}
                      {author ? <span> by {author}</span> : ''}
                      {tags[0] ? (
                        <span>
                          {' '}
                          in{' '}
                          {tags
                            .map((tag, i) => (
                              <a key={i} href={`/blog/tag/${tag}`}>
                                {tag}
                              </a>
                            ))
                            .reduce((acc, elem) => [acc, ', ', elem])}
                        </span>
                      ) : (
                        ''
                      )}
                    </Published>
                    <StyledHtml html={descriptionHtml} />
                  </Content>
                </Post>
              </Link>
            )
          )}
      </Posts>
      {tag && (
        <BackLink>
          <Link href="/blog">
            <StyledLink>All Posts</StyledLink>
          </Link>
        </BackLink>
      )}
    </div>
  );
};
