import React, { FunctionComponent, useState } from "react";
import { navigate } from "gatsby";
import { Layout } from "../components/layout";

const createFormDataObj = (data: any) => {
  const formData = new FormData();
  Object.keys(data).forEach((k) => {
    formData.append(k, data[k]);
  });
  return formData as any;
};

const FORM_NAME = "Contact Form";

export const NotFound: FunctionComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // This `data` object is what's passed to the createFormDataObj. It needs all of your form fields, where the key is the name= attribute and the value is the value=
    const data = {
      "form-name": FORM_NAME,
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      Phone: phone,
      Message: message,
    };
    // This POSTs your encoded form to Netlify with the required headers (for text; headers will be different for POSTing a file) and, on success, redirects to the custom success page using Gatsby's `navigate` helper function that we imported at the top
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(createFormDataObj(data)).toString(),
    })
      .then(() => navigate("/contact-success"))
      .catch((error) => alert(error));
    // This is required to prevent the default onSubmit behavior
    e.preventDefault();
  };

  return (
    <Layout>
      <div className="relative bg-white mt-2">
        <div className="hidden lg:block lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover lg:absolute lg:h-full"
              src="/contact.jpeg"
              alt=""
            />
          </div>
        </div>
        <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
          <div className="lg:pr-8">
            <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
              <h2 className="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10">
                Contact Me
              </h2>
              <form
                name={FORM_NAME}
                data-netlify="true"
                onSubmit={handleSubmit}
                action="/contact-success"
                method="POST"
                className="mt-9 grid grid-cols-1 row-gap-6 sm:grid-cols-2 sm:col-gap-8"
              >
                <div>
                  <label
                    htmlFor="first_name"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    First name
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      name="FirstName"
                      id="first_name"
                      className="form-input block w-full transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Last name
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      name="LastName"
                      id="last_name"
                      className="form-input block w-full transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      name="Email"
                      id="email"
                      type="email"
                      className="form-input block w-full transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium leading-5 text-gray-700"
                    >
                      Phone
                    </label>
                    <span className="text-sm leading-5 text-gray-500">
                      Optional
                    </span>
                  </div>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      name="Phone"
                      id="phone"
                      className="form-input block w-full transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium leading-5 text-gray-700"
                    >
                      Message
                    </label>
                    <span className="text-sm leading-5 text-gray-500">
                      Max. 500 characters
                    </span>
                  </div>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      name="Message"
                      id="message"
                      rows={4}
                      className="form-textarea block w-full transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="text-right sm:col-span-2">
                  <span className="inline-flex rounded-md shadow-sm">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                    >
                      Submit
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
