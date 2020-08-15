import React, { FunctionComponent } from "react";
import { graphql } from "gatsby";
import { format } from "date-fns";
import Image, { FluidObject } from "gatsby-image";
import { Layout } from "../../components/layout";

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

interface BlogPostTemplate {
  title: string;
  tags: string[];
  img: FluidObject;
  imgAlt?: string;
  publishedDate: Date;
}

const BlogPostTemplate: FunctionComponent<BlogPostTemplate> = ({
  title,
  tags,
  img,
  imgAlt,
  publishedDate,
  children,
}) => {
  return (
    <div className="">
      <h1 className="text-5xl text-center font-semibold mt-8 mb-2">{title}</h1>
      <div className="text-center mb-3 text-gray-500">
        {format(publishedDate, "dd MMM, yyyy")}
      </div>
      <div className="text-center mb-3 text-gray-500">
        {tags.map((tag, index) => (
          <span key={index} className="mx-2">
            #{tag}
          </span>
        ))}
      </div>
      <Image fluid={img} alt={imgAlt || title} className="w-full" />
      {imgAlt && <div className="text-center my-2 text-gray-500">{imgAlt}</div>}
      <div className="flex justify-center">
        <div className="max-w-screen-lg">
          <div className="prose sm:prose-lg md:prose-xl text-gray-700">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

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
    <Layout>
      <BlogPostTemplate
        title={title}
        tags={tags}
        img={img}
        imgAlt={imgAlt}
        publishedDate={new Date(publishedDate)}
      >
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </BlogPostTemplate>
    </Layout>
  );
};

export default Page;
