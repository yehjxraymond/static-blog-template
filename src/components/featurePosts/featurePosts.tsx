import React, { FunctionComponent } from "react";

export interface Tag {
  label: string;
  href: string;
}

export interface FeaturePost {
  title: string;
  summary: string;
  href: string;
  img: string;
  imgAlt?: string;
  tags: Tag[];
}

export interface FeaturePosts {
  featurePosts: FeaturePost[];
}

export const FeaturePost: FunctionComponent<FeaturePost> = ({
  title,
  summary,
  href,
  img,
  imgAlt,
  tags,
}) => {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <a href={href}>
          <img
            className="h-48 w-full object-cover"
            src={img}
            alt={imgAlt || title}
          />
        </a>
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm leading-5 font-medium text-indigo-600">
            {tags.map(({ label, href }, index) => (
              <span key={index}>
                <a href={href} className="hover:underline">
                  {label}
                </a>{" "}
              </span>
            ))}
          </p>
          <a href={href} className="block">
            <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
              {title}
            </h3>
            <p className="mt-3 text-base leading-6 text-gray-500">{summary}</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export const FeaturePosts: FunctionComponent<FeaturePosts> = ({
  featurePosts,
}) => {
  return (
    <div className="relative pt-6 pb-20 lg:pb-28">
      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-2xl leading-9 tracking-tight font-semibold text-gray-900 sm:text-xl sm:leading-10">
          Featured Posts
        </h2>
        <div className="mt-3 grid gap-5 max-w-lg mx-auto md:grid-cols-2 xl:grid-cols-4 md:max-w-none">
          {featurePosts.map((featurePost, index) => (
            <FeaturePost {...featurePost} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
