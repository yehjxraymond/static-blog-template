import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { join } from "path";

// https://ogp.me/#types

type SEO = {
  description?: string;
  lang?: string;
  meta?: any;
  keywords?: any;
  title: string;
  type?: "website" | "article" | "blog";
  image?: string;
};

export const SEO: React.FunctionComponent<SEO> = ({
  description,
  lang = "en",
  meta,
  keywords,
  title,
  image,
  type = "website",
}) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
            description
          }
        }
      }
    `
  );

  const imagePath = image ? join(siteMetadata.siteUrl, image) : undefined;

  const metaDescription = description || siteMetadata.description;

  const metaFinal = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: type,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: siteMetadata.author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ];

  if (keywords && keywords.length) {
    metaFinal.push({
      name: `keywords`,
      content: keywords.join(`, `),
    });
  }

  if (meta) {
    metaFinal.concat(meta);
  }

  if (imagePath) {
    metaFinal.push({
      property: `og:title`,
      content: imagePath,
    });
    metaFinal.push({
      name: `twitter:image`,
      content: imagePath,
    });
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`${title} | ${siteMetadata.title}`}
      meta={metaFinal}
    />
  );
};
