import React, { FunctionComponent } from "react";
import { Layout } from "../components/layout";
import { BlogPost } from "../types";
import { format } from "date-fns";

const content = (
  <div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Augue lacus viverra
      vitae congue eu consequat. Egestas maecenas pharetra convallis posuere
      morbi. Sed faucibus turpis in eu mi bibendum neque egestas. Ullamcorper a
      lacus vestibulum sed arcu non odio euismod. Est velit egestas dui id
      ornare arcu odio ut. Integer feugiat scelerisque varius morbi enim nunc
      faucibus. Augue eget arcu dictum varius duis at consectetur lorem donec.
      Pellentesque pulvinar pellentesque habitant morbi tristique senectus et
      netus. Dui ut ornare lectus sit. Orci eu lobortis elementum nibh tellus
      molestie nunc non blandit. Et egestas quis ipsum suspendisse ultrices
      gravida dictum fusce. Ut sem nulla pharetra diam sit amet. Tortor pretium
      viverra suspendisse potenti nullam ac.
    </p>
    <h2>Heading 2</h2>
    <p>
      Accumsan tortor posuere ac ut consequat semper viverra nam libero.
      Sagittis orci a scelerisque purus. Fermentum et sollicitudin ac orci
      phasellus egestas. Morbi tincidunt augue interdum velit euismod in
      pellentesque. Ipsum dolor sit amet consectetur. Lorem mollis aliquam ut
      porttitor leo a diam. Ullamcorper morbi tincidunt ornare massa eget.
      Volutpat blandit aliquam etiam erat. Sed faucibus turpis in eu mi bibendum
      neque. Feugiat nisl pretium fusce id velit ut tortor. Nunc consequat
      interdum varius sit amet mattis vulputate enim. Porta non pulvinar neque
      laoreet suspendisse interdum consectetur. Feugiat in ante metus dictum.
      Quis risus sed vulputate odio ut.
    </p>
    <h3>Heading 3</h3>
    <p>
      Nulla aliquet porttitor lacus luctus. Sed velit dignissim sodales ut eu
      sem integer vitae. In nulla posuere sollicitudin aliquam. Vel risus
      commodo viverra maecenas accumsan lacus vel facilisis. Sit amet risus
      nullam eget felis eget nunc lobortis. Velit scelerisque in dictum non
      consectetur. Felis eget velit aliquet sagittis id consectetur. Aliquam
      vestibulum morbi blandit cursus. Cursus eget nunc scelerisque viverra
      mauris in aliquam sem. Sit amet massa vitae tortor condimentum lacinia
      quis vel eros. Libero id faucibus nisl tincidunt eget nullam. Tincidunt
      augue interdum velit euismod in pellentesque massa placerat. In nisl nisi
      scelerisque eu. Vitae sapien pellentesque habitant morbi tristique.
      Aliquam eleifend mi in nulla posuere. Pretium fusce id velit ut tortor
      pretium. Justo eget magna fermentum iaculis eu non. Nisl purus in mollis
      nunc sed. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus.
    </p>
    <p>
      Molestie ac feugiat sed lectus vestibulum mattis. Morbi blandit cursus
      risus at ultrices mi. At quis risus sed vulputate. Vel pharetra vel turpis
      nunc eget lorem. Tortor consequat id porta nibh venenatis cras sed felis.
      Quis eleifend quam adipiscing vitae. Sed cras ornare arcu dui. Aliquet
      bibendum enim facilisis gravida neque convallis a cras. Turpis egestas
      maecenas pharetra convallis posuere morbi leo. Velit ut tortor pretium
      viverra suspendisse potenti nullam ac. Vitae elementum curabitur vitae
      nunc sed velit dignissim. Enim sed faucibus turpis in eu mi bibendum neque
      egestas.
    </p>
    <p>
      In pellentesque massa placerat duis ultricies lacus sed. Ipsum dolor sit
      amet consectetur adipiscing elit ut. Aliquam faucibus purus in massa.
      Facilisi etiam dignissim diam quis enim. Tempor commodo ullamcorper a
      lacus vestibulum sed arcu non odio. Odio pellentesque diam volutpat
      commodo sed egestas egestas fringilla phasellus. Sed viverra ipsum nunc
      aliquet bibendum enim facilisis gravida neque. Sapien nec sagittis aliquam
      malesuada bibendum arcu vitae. Hendrerit dolor magna eget est lorem. Ipsum
      dolor sit amet consectetur. Non tellus orci ac auctor. Ipsum faucibus
      vitae aliquet nec. Rutrum tellus pellentesque eu tincidunt tortor aliquam
      nulla. Ut eu sem integer vitae justo eget magna. Non odio euismod lacinia
      at quis risus sed vulputate. Nibh venenatis cras sed felis eget velit
      aliquet sagittis. Turpis egestas sed tempus urna et pharetra pharetra.
      Posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis.
    </p>
  </div>
);

const data: BlogPost = {
  template: "blog-post",
  content,
  featured: true,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue lacus viverra vitae congue eu consequat. Egestas maecenas pharetra convallis posuere morbi.",
  img:
    "https://images.unsplash.com/photo-1597077392360-c01bc7963aeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80",
  imgAlt: "How now brown cow?",
  slug: "blog-slug",
  tags: ["finance", "leadership"],
  title: "Boost your conversion rate",
  publishedDate: new Date(),
};

const BlogPostTemplate: FunctionComponent<BlogPost> = ({
  title,
  content,
  tags,
  img,
  imgAlt,
  publishedDate,
}) => {
  return (
    <div className="">
      <h1 className="text-5xl text-center font-semibold mt-8 mb-2">{title}</h1>
      <div className="text-center mb-3 text-gray-500">
        {format(publishedDate, "dd MMM, yyyy")}
      </div>
      <div className="text-center mb-3 text-gray-500">
        {tags.map((tag, index) => (
          <span key={index} className="mx-2">
            #{tag}
          </span>
        ))}
      </div>
      <img className="w-full" src={img} alt={imgAlt || title} />
      {imgAlt && <div className="text-center my-2 text-gray-500">{imgAlt}</div>}
      <div className="flex justify-center">
        <div className="max-w-screen-lg">
          <div className="prose sm:prose-lg md:prose-xl text-gray-700">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <Layout>
      <BlogPostTemplate {...data} />
    </Layout>
  );
};

export default Home;
