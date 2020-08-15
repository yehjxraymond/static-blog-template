import React, { FunctionComponent } from "react";
import { Layout } from "../components/layout";

export const NotFound: FunctionComponent = () => {
  return (
    <Layout>
      <h1 className="text-3xl text-center my-6">Not Found</h1>
      <img className="max-w-5xl mx-auto my-6" src="/404.jpeg"></img>
    </Layout>
  );
};

export default NotFound;
