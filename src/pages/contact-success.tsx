import React, { FunctionComponent } from "react";
import { Layout } from "../components/layout";

export const ContactSuccess: FunctionComponent = () => {
  return (
    <Layout>
      <h1 className="text-3xl text-center my-6">Thank You</h1>
      <p className="text-center">
        Your message has been received. I will get back to you as soon as I can!
      </p>
      <img className="max-w-4xl mx-auto my-6" src="/thank-you.jpeg"></img>
    </Layout>
  );
};

export default ContactSuccess;
