import React, { FunctionComponent } from "react";
import { PostSnippet } from "../../types";

export interface RecentPosts {
  recentPosts: PostSnippet[];
}

const text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue lacus viverra vitae congue eu consequat. Egestas maecenas pharetra convallis posuere morbi. Sed faucibus turpis in eu mi bibendum neque egestas. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Est velit egestas dui id ornare arcu odio ut. Integer feugiat scelerisque varius morbi enim nunc faucibus. Augue eget arcu dictum varius duis at consectetur lorem donec. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Dui ut ornare lectus sit. Orci eu lobortis elementum nibh tellus molestie nunc non blandit. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Ut sem nulla pharetra diam sit amet. Tortor pretium viverra suspendisse potenti nullam ac.

In pellentesque massa placerat duis ultricies lacus sed. Ipsum dolor sit amet consectetur adipiscing elit ut. Aliquam faucibus purus in massa. Facilisi etiam dignissim diam quis enim. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Hendrerit dolor magna eget est lorem. Ipsum dolor sit amet consectetur. Non tellus orci ac auctor. Ipsum faucibus vitae aliquet nec. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Ut eu sem integer vitae justo eget magna. Non odio euismod lacinia at quis risus sed vulputate. Nibh venenatis cras sed felis eget velit aliquet sagittis. Turpis egestas sed tempus urna et pharetra pharetra. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis.`;

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
          <img
            className="h-48 w-full sm:w-48 xl:h-52 xl:w-52 object-cover rounded-sm"
            src={img}
            alt={imgAlt || title}
          />
        </a>
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div className="">
          <div className="text-sm leading-5 font-medium text-indigo-600">
            {tags.map(({ label, href: tagHref }, index) => (
              <span key={index} className="mr-4">
                <a href={tagHref} className="hover:underline">
                  {label}
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
