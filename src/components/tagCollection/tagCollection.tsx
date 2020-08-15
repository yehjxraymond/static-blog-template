import React, { FunctionComponent } from "react";
import { PostSnippet } from "../../types";
import { PostList } from "../postList";

export interface TagCollection {
  tag: string;
  relatedPosts: PostSnippet[];
}

export const TagCollection: FunctionComponent<TagCollection> = ({
  relatedPosts,
  tag,
}) => {
  return (
    <div className="relative py-6">
      <div className="relative max-w-7xl mx-auto">
        <h1 className="text-2xl leading-9 tracking-tight font-semibold text-gray-900 sm:leading-10 text-center my-12">
          #{tag}
        </h1>
        <PostList posts={relatedPosts} />
      </div>
    </div>
  );
};
