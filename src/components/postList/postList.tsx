import React, { FunctionComponent } from "react";
import Image from "gatsby-image";
import { PostSnippet } from "../../types";

export interface PostList {
  posts: PostSnippet[];
}

export const PostListItem: FunctionComponent<PostSnippet> = ({
  href,
  img,
  imgAlt,
  title,
  tags,
  summary,
}) => {
  return (
    <div className="flex mb-16 sm:mb-28 flex-col sm:flex-row">
      <div className="flex-shrink-0 mr-0 sm:mr-8 mb-6 sm:mb-0">
        <a href={href}>
          <Image
            fluid={img}
            alt={imgAlt || title}
            className="h-48 w-full sm:w-48 xl:h-52 xl:w-52 object-cover rounded-sm"
          />
        </a>
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div className="block">
          <a href={href}>
            <h3 className="mb-2 text-xl leading-7 font-semibold text-gray-900">
              {title}
            </h3>
          </a>
          <div className="text-sm leading-5 font-medium text-indigo-600">
            {tags.map((tag, index) => (
              <span key={index} className="mr-4">
                <a href={`/tags/${tag}`} className="hover:underline">
                  #{tag}
                </a>
              </span>
            ))}
          </div>
          <a href={href}>
            <p className="mt-3 text-base leading-6 text-gray-500">{summary}</p>
          </a>
        </div>
        <div className="mt-4">
          <a href={href} className="block font-medium tracking-wide">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export const PostList: FunctionComponent<PostList> = ({ posts }) => {
  return (
    <div className="mt-3">
      {posts.map((post, index) => (
        <PostListItem {...post} key={index} />
      ))}
    </div>
  );
};
