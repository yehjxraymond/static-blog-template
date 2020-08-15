import { CreatePagesArgs } from "gatsby";
import * as path from "path";

interface PostQuery {
  allMarkdownRemark: {
    edges: {
      node: {
        id: string;
        frontmatter: {
          tags: string[];
          template: string;
        };
        fields: {
          slug: string;
        };
      };
    }[];
  };
}

export const createPages = async ({
  actions,
  graphql,
}: CreatePagesArgs): Promise<void> => {
  const { createPage } = actions;
  const result = await graphql<PostQuery>(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              template
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    console.error(result.errors);
    throw new Error("Unexpected error from graphql query during create pages");
  }

  createPage({
    path: "/",
    component: path.resolve(`src/createPages/templates/home.tsx`),
    context: {},
  });

  const posts = result.data?.allMarkdownRemark.edges;
  const tagsCollection = new Set<string>();

  if (posts)
    posts.forEach((edge) => {
      const {
        id,
        frontmatter: { tags },
      } = edge.node;
      tags.forEach((tag) => tagsCollection.add(tag));
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(
          `src/createPages/templates/${String(
            edge.node.frontmatter.template
          )}.tsx`
        ),
        context: {
          id,
          tags,
        },
      });
    });

  tagsCollection.forEach((tag) => {
    createPage({
      path: `/tags/${tag}`,
      component: path.resolve(`src/createPages/templates/tag.tsx`),
      context: {
        tag,
      },
    });
  });
};
