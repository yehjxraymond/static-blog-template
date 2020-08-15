import React, { FunctionComponent } from "react";
import { graphql } from "gatsby";
import { FluidObject } from "gatsby-image";
import { BlogPost } from "../../components/blogPost";
interface QueryData {
  markdownRemark: {
    html: string;
    frontmatter: {
      title: string;
      tags: string[];
      img: {
        childImageSharp: { fluid: FluidObject };
      };
      imgAlt: string;
      publishedDate: string;
    };
  };
}

export const pageQuery = graphql`
  query BlogPostByID($id: String!, $tag: [String!]) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        title
        description
        tags
        img {
          childImageSharp {
            fluid(maxWidth: 2400, quality: 90) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        imgAlt
        publishedDate
      }
    }
    allMarkdownRemark(
      limit: 3
      sort: { fields: [frontmatter___publishedDate], order: DESC }
      filter: { frontmatter: { tags: { in: $tag } }, id: { ne: $id } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            tags
            img {
              publicURL
              childImageSharp {
                fluid(maxWidth: 370, maxHeight: 220, quality: 90) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`;

interface Page {
  data: QueryData;
}

export const Page: FunctionComponent<Page> = ({ data }) => {
  const {
    markdownRemark: {
      html,
      frontmatter: {
        title,
        tags,
        imgAlt,
        img: {
          childImageSharp: { fluid: img },
        },
        publishedDate,
      },
    },
  } = data;
  return (
    <BlogPost
      title={title}
      tags={tags}
      img={img}
      imgAlt={imgAlt}
      publishedDate={new Date(publishedDate)}
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </BlogPost>
  );
};

export default Page;
