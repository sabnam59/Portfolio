import React from "react";
import Card from "../components/Card";

const Blog = () => {
  const myBlogs = [
    {
      BlogKotitle: "Travel To Prativa Chowk",
      BlogKopath: "/images/blogImage.1.jpg",
      BlogKodescription: "Prativa chowk ko panipuri khadai",
      Blogbutton: "view my blog",
    },
    {
      BlogKotitle: "travel blog 2",
      BlogKopath: "/images/blogImage.2.jpg",
      BlogKodescription: "this is my travel blog",
      Blogbutton: "view my blog",
    },
    {
      BlogKotitle: "travel blog 3",
      BlogKopath: "/images/blogImage.3.jpg",
      BlogKodescription: "this is my travel blog",
      Blogbutton: "view my blog",
    },
    {
      BlogKotitle: "travel blog 1",
      BlogKopath: "/images/blogImage.1.jpg",
      BlogKodescription: "this is my travel blog",
      Blogbutton: "view my blog",
    },
    {
      BlogKotitle: "travel blog 2",
      BlogKopath: "/images/blogImage.2.jpg",
      BlogKodescription: "this is my travel blog",
      Blogbutton: "view my blog",
    },
    {
      BlogKotitle: "travel blog 3",
      BlogKopath: "/images/blogImage.3.jpg",
      BlogKodescription: "this is my travel blog",
      Blogbutton: "view my blog",
    },
    {
      BlogKotitle: "travel blog 1",
      BlogKopath: "/images/blogImage.1.jpg",
      BlogKodescription: "this is my travel blog",
      Blogbutton: "view my blog",
    },
    {
      BlogKotitle: "travel blog 2",
      BlogKopath: "/images/blogImage.2.jpg",
      BlogKodescription: "this is my travel blog",
      Blogbutton: "view my blog",
    },
    {
      BlogKotitle: "travel blog 3",
      BlogKopath: "/images/blogImage.3.jpg",
      BlogKodescription: "this is my travel blog",
      Blogbutton: "view my blog",
    },
    {
      BlogKotitle: "travel blog 1",
      BlogKopath: "/images/blogImage.1.jpg",
      BlogKodescription: "this is my travel blog",
      Blogbutton: "view my blog",
    },
    {
      BlogKotitle: "travel blog 2",
      BlogKopath: "/images/blogImage.2.jpg",
      BlogKodescription: "this is my travel blog",
      Blogbutton: "view my blog",
    },
    {
      BlogKotitle: "travel blog 3",
      BlogKopath: "/images/blogImage.3.jpg",
      BlogKodescription: "this is my travel blog",
      Blogbutton: "view my blog",
    },
    {
      BlogKotitle: "travel blog 1",
      BlogKopath: "/images/blogImage.1.jpg",
      BlogKodescription: "this is my travel blog",
      Blogbutton: "view my blog",
    },
    {
      BlogKotitle: "travel blog 2",
      BlogKopath: "/images/blogImage.2.jpg",
      BlogKodescription: "this is my travel blog",
      Blogbutton: "view my blog",
    },
    {
      BlogKotitle: "travel blog 3",
      BlogKopath: "/images/blogImage.3.jpg",
      BlogKodescription: "this is my travel blog",
      Blogbutton: "view my blog",
    },
    {
      BlogKotitle: "travel blog 1",
      BlogKopath: "/images/blogImage.1.jpg",
      BlogKodescription: "this is my travel blog",
      Blogbutton: "view my blog",
    },
    {
      BlogKotitle: "travel blog 2",
      BlogKopath: "/images/blogImage.2.jpg",
      BlogKodescription: "this is my travel blog",
      Blogbutton: "view my blog",
    },
    {
      BlogKotitle: "travel blog 3",
      BlogKopath: "/images/blogImage.3.jpg",
      BlogKodescription: "this is my travel blog",
      Blogbutton: "view my blog",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-3 px-10 py-14 bg-black text-white gap-20 ">
      
        {myBlogs.map((blog) => (
          // we have to show each blog in card
          <Card
            title={blog.BlogKotitle}
            path={blog.BlogKopath}
            description={blog.BlogKodescription}
            button={blog.Blogbutton}
          />
        ))}
      </div>
    </>
  );
};

export default Blog;
