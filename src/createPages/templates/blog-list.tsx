import React, { FunctionComponent } from "react";
import { graphql } from "gatsby";
import { FluidObject } from "gatsby-image";
import { Layout } from "../../components/layout";
import { PostSnippet } from "../../types";
import { BlogList } from "../../components/blogList";
import { SEO } from "../../components/seo";

interface Post {
  node: {
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
      description: string;
      tags: string[];
      img: { childImageSharp: { fluid: FluidObject } };
      imgAlt: string;
      publishedDate: string;
    };
  };
}

interface QueryData {
  data: {
    allMarkdownRemark: {
      edges: Post[];
    };
  };
  pageContext: {
    currentPage: number;
    hasNext: boolean;
  };
}

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___publishedDate], order: DESC }
      limit: $limit
      skip: $skip
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
            imgAlt
            publishedDate
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

export const Page: FunctionComponent<QueryData> = ({ data, pageContext }) => {
  const posts: PostSnippet[] = data.allMarkdownRemark.edges.map(({ node }) => ({
    title: node.frontmatter.title,
    summary: node.frontmatter.description,
    href: node.fields.slug,
    img: node.frontmatter.img.childImageSharp.fluid,
    imgAlt: node.frontmatter.imgAlt,
    tags: node.frontmatter.tags,
    publishedDate: new Date(node.frontmatter.publishedDate),
  }));
  return (
    <>
      <SEO
        title={`Page ${pageContext.currentPage}`}
        image={posts[0].img.src}
        description={`Page ${pageContext.currentPage}`}
      />
      <Layout>
        <BlogList
          posts={posts}
          page={pageContext.currentPage}
          hasNext={pageContext.hasNext}
        />
      </Layout>
    </>
  );
};

export default Page;
