import React, { FunctionComponent } from "react";
import { PostSnippet } from "../../types";
import { PostList } from "../postList";
import { Pagination } from "../pagination";

export interface BlogList {
  page: number;
  hasNext: boolean;
  posts: PostSnippet[];
}

export const BlogList: FunctionComponent<BlogList> = ({
  page,
  posts,
  hasNext,
}) => {
  const prev = page > 1 ? `/page/${page - 1}/` : undefined;
  const next = hasNext ? `/page/${page + 1}/` : undefined;
  return (
    <div className="relative py-6">
      <div className="relative max-w-7xl mx-auto">
        <h1 className="text-2xl leading-9 tracking-tight font-semibold text-gray-900 sm:leading-10 text-center my-12">
          Page {page}
        </h1>
        <PostList posts={posts} />
        <Pagination prev={prev} next={next} />
      </div>
    </div>
  );
};
