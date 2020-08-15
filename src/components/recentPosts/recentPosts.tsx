import React, { FunctionComponent } from "react";
import { PostSnippet } from "../../types";
import { PostList } from "../postList";

export interface RecentPosts {
  recentPosts: PostSnippet[];
}

export const RecentPosts: FunctionComponent<RecentPosts> = ({
  recentPosts,
}) => {
  return (
    <div className="relative py-6">
      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-2xl leading-9 tracking-tight font-semibold text-gray-900 sm:leading-10 text-center my-12">
          Latest Stories
        </h2>
        <PostList posts={recentPosts} />
      </div>
    </div>
  );
};
