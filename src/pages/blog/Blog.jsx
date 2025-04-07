import React, { useState } from "react";
import Card from "../../components/Card";
import NotFound from "../../components/NotFound";

const Blog = () => {

  
  const [myBlogs, setMyBlogs] = useState([
    {
      BlogId: "1",
      Blogtitle: "Travel To Prativa Chowk",
      Blogpath: "/images/blogImage.1.jpg",
      Blogdescription: "Prativa chowk ko panipuri khadai",
      Blogbutton: "view my blog",
    },
    {
      BlogId: "2",

      Blogtitle: "travel blog 2",
      Blogpath: "/images/blogImage.2.jpg",
      Blogdescription: "this is my travel blog",
      Blogbutton: "view my blog",
    },
    {
      BlogId: "3",

      Blogtitle: "travel blog 3",
      Blogpath: "/images/blogImage.3.jpg",
      Blogdescription: "this is my travel blog",
      Blogbutton: "view my blog",
    },
    {
      BlogId: "4",

      Blogtitle: "travel blog 1",
      Blogpath: "/images/blogImage.1.jpg",
      Blogdescription: "this is my travel blog",
      Blogbutton: "view my blog",
    },
    {
      BlogId: "5",

      Blogtitle: "travel blog 2",
      Blogpath: "/images/blogImage.2.jpg",
      Blogdescription: "this is my travel blog",
      Blogbutton: "view my blog",
    },
    {
      BlogId: "6",

      Blogtitle: "travel blog 3",
      Blogpath: "/images/blogImage.3.jpg",
      Blogdescription: "this is my travel blog",
      Blogbutton: "view my blog",
    },
    {
      BlogId: "7",

      Blogtitle: "travel blog 1",
      Blogpath: "/images/blogImage.1.jpg",
      Blogdescription: "this is my travel blog",
      Blogbutton: "view my blog",
    },
    {
      BlogId: "1",

      Blogtitle: "travel blog 2",
      Blogpath: "/images/blogImage.2.jpg",
      Blogdescription: "this is my travel blog",
      Blogbutton: "view my blog",
    },
    {
      BlogId: "1",

      Blogtitle: "travel blog 3",
      Blogpath: "/images/blogImage.3.jpg",
      Blogdescription: "this is my travel blog",
      Blogbutton: "view my blog",
    },
    {
      BlogId: "1",

      Blogtitle: "travel blog 1",
      Blogpath: "/images/blogImage.1.jpg",
      Blogdescription: "this is my travel blog",
      Blogbutton: "view my blog",
    },
    {
      BlogId: "1",

      Blogtitle: "travel blog 2",
      Blogpath: "/images/blogImage.2.jpg",
      Blogdescription: "this is my travel blog",
      Blogbutton: "view my blog",
    },
    {
      BlogId: "1",

      Blogtitle: "travel blog 3",
      Blogpath: "/images/blogImage.3.jpg",
      Blogdescription: "this is my travel blog",
      Blogbutton: "view my blog",
    },
    {
      BlogId: "1",

      Blogtitle: "travel blog 1",
      Blogpath: "/images/blogImage.1.jpg",
      Blogdescription: "this is my travel blog",
      Blogbutton: "view my blog",
    },
    {
      Blogtitle: "travel blog 2",
      Blogpath: "/images/blogImage.2.jpg",
      Blogdescription: "this is my travel blog",
      Blogbutton: "view my blog",
    },
    {
      Blogtitle: "travel blog 3",
      Blogpath: "/images/blogImage.3.jpg",
      Blogdescription: "this is my travel blog",
      Blogbutton: "view my blog",
    },
    {
      Blogtitle: "travel blog 1",
      Blogpath: "/images/blogImage.1.jpg",
      Blogdescription: "this is my travel blog",
      Blogbutton: "view my blog",
    },
    {
      Blogtitle: "travel blog 2",
      Blogpath: "/images/blogImage.2.jpg",
      Blogdescription: "this is my travel blog",
      Blogbutton: "view my blog",
    },
    {
      Blogtitle: "travel blog 3",
      Blogpath: "/images/blogImage.3.jpg",
      Blogdescription: "this is my travel blog",
      Blogbutton: "view my blog",
    },
  ]);

  const [userTypedWord, setUserTypedWord] = useState("");

  // so user le haleko kura vado vitra haldeu na tw state set garera
  const handleChange = (e) => {
    // console.log(e.target.value);
    // user le type gareko kura k ma arixa y value=> more specific=> e.target.value okay ??
    setUserTypedWord(e.target.value);
  };

  const filteredBlogs = myBlogs.filter((blog) =>
    blog.Blogtitle.toLowerCase().includes(userTypedWord.toLowerCase())
  );

  // is this an object?
  const NotFoundText = "Blog not found"

  return (
    <>
    <div className="bg-black flex justify-end pr-14 pt-10 md:pt-0">
      <input
        type="search"
        name="searchbar"
        placeholder="search blog"
        // okay so state ra input ko value lai sync ma rakhna connect garum hai tw hus
        value={userTypedWord}
        onChange={handleChange}
        className=" rounded-lg border-4 border-gray-700 lg:py-3 lg:px-5 py-3 px-4"
      />
    </div>

      {filteredBlogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-10 py-20 bg-black text-white gap-24 ">
          {/* {myBlogs.map((blog) => ( */}
          {filteredBlogs.map((blog) => (
            // we have to show each blog in card
            <Card
              title={blog.Blogtitle}
              path={blog.Blogpath}
              description={blog.Blogdescription}
              button={blog.Blogbutton}
              id={blog.BlogId}
              dpath="blog"
            />
          ))}
        </div>
      ) : (
        <NotFound text={NotFoundText}/>
        // do we need h1??
      )}
    </>
  );
};

export default Blog;
