import React, { FunctionComponent } from "react";
import { graphql } from "gatsby";
import { FluidObject } from "gatsby-image";
import { BlogPost } from "../../components/blogPost";
import { SEO } from "../../components/seo";
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
      description: string;
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
              ...GatsbyImageSharpFluid_withWebp
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
              childImageSharp {
                fluid(maxWidth: 370, maxHeight: 220, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
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
        description,
        img: {
          childImageSharp: { fluid: img },
        },
        publishedDate,
      },
    },
  } = data;

  return (
    <>
      <SEO title={title} image={img.src} description={description} />
      <BlogPost
        title={title}
        tags={tags}
        img={img}
        imgAlt={imgAlt}
        publishedDate={new Date(publishedDate)}
      >
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </BlogPost>
    </>
  );
};

export default Page;
