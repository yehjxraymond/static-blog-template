import React, { FunctionComponent } from "react";
import Image from "gatsby-image";
import { PostSnippet } from "../../types";

export interface RecentPosts {
  recentPosts: PostSnippet[];
}

export const RecentPost: FunctionComponent<PostSnippet> = ({
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
        <div className="">
          <div className="text-sm leading-5 font-medium text-indigo-600">
            {tags.map((tag, index) => (
              <span key={index} className="mr-4">
                <a href={`/tags/${tag}`} className="hover:underline">
                  {tag}
                </a>
              </span>
            ))}
          </div>
          <div>
            <a href={href} className="block">
              <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                {title}
              </h3>
              <p className="mt-3 text-base leading-6 text-gray-500">
                {summary}
              </p>
            </a>
          </div>
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

export const RecentPosts: FunctionComponent<RecentPosts> = ({
  recentPosts,
}) => {
  return (
    <div className="relative py-6">
      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-2xl leading-9 tracking-tight font-semibold text-gray-900 sm:leading-10 text-center my-12">
          Latest Stories
        </h2>
        <div className="mt-3">
          {recentPosts.map((post, index) => (
            <RecentPost {...post} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
