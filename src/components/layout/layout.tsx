import React, { ReactNode } from "react";
import Helmet from "react-helmet";
import { withPrefix } from "gatsby";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import { Header, MenuItem } from "./header";
import icon from "../../../static/logo.png";

const logo = <img className="w-auto h-15" src={icon} alt="Workflow" />;
const menuItems: MenuItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about/",
  },
];

export const Layout = ({ children }: { children: ReactNode }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ffffff"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={`${withPrefix("/")}logo.png`} />
      </Helmet>
      <Header menuItems={menuItems} logo={logo} />
      <div className="min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      </div>
      {/* <Header active={active} />

      <Footer /> */}
    </>
  );
};

export default Layout;
