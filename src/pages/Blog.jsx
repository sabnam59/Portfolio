import React, { useState } from "react";
import Card from "../components/Card";

const Blog = () => {
  // const myBlogs = [
  //   {
  //     BlogKoId: "1",
  //     BlogKotitle: "Travel To Prativa Chowk",
  //     BlogKopath: "/images/blogImage.1.jpg",
  //     BlogKodescription: "Prativa chowk ko panipuri khadai",
  //     Blogbutton: "view my blog",
  //   },
  //   {
  //     BlogKoId: "2",

  //     BlogKotitle: "travel blog 2",
  //     BlogKopath: "/images/blogImage.2.jpg",
  //     BlogKodescription: "this is my travel blog",
  //     Blogbutton: "view my blog",
  //   },
  //   {
  //     BlogKoId: "3",

  //     BlogKotitle: "travel blog 3",
  //     BlogKopath: "/images/blogImage.3.jpg",
  //     BlogKodescription: "this is my travel blog",
  //     Blogbutton: "view my blog",
  //   },
  //   {
  //     BlogKoId: "4",

  //     BlogKotitle: "travel blog 1",
  //     BlogKopath: "/images/blogImage.1.jpg",
  //     BlogKodescription: "this is my travel blog",
  //     Blogbutton: "view my blog",
  //   },
  //   {
  //     BlogKoId: "5",

  //     BlogKotitle: "travel blog 2",
  //     BlogKopath: "/images/blogImage.2.jpg",
  //     BlogKodescription: "this is my travel blog",
  //     Blogbutton: "view my blog",
  //   },
  //   {
  //     BlogKoId: "6",

  //     BlogKotitle: "travel blog 3",
  //     BlogKopath: "/images/blogImage.3.jpg",
  //     BlogKodescription: "this is my travel blog",
  //     Blogbutton: "view my blog",
  //   },
  //   {
  //     BlogKoId: "7",

  //     BlogKotitle: "travel blog 1",
  //     BlogKopath: "/images/blogImage.1.jpg",
  //     BlogKodescription: "this is my travel blog",
  //     Blogbutton: "view my blog",
  //   },
  //   {
  //     BlogKoId: "1",

  //     BlogKotitle: "travel blog 2",
  //     BlogKopath: "/images/blogImage.2.jpg",
  //     BlogKodescription: "this is my travel blog",
  //     Blogbutton: "view my blog",
  //   },
  //   {
  //     BlogKoId: "1",

  //     BlogKotitle: "travel blog 3",
  //     BlogKopath: "/images/blogImage.3.jpg",
  //     BlogKodescription: "this is my travel blog",
  //     Blogbutton: "view my blog",
  //   },
  //   {
  //     BlogKoId: "1",

  //     BlogKotitle: "travel blog 1",
  //     BlogKopath: "/images/blogImage.1.jpg",
  //     BlogKodescription: "this is my travel blog",
  //     Blogbutton: "view my blog",
  //   },
  //   {
  //     BlogKoId: "1",

  //     BlogKotitle: "travel blog 2",
  //     BlogKopath: "/images/blogImage.2.jpg",
  //     BlogKodescription: "this is my travel blog",
  //     Blogbutton: "view my blog",
  //   },
  //   {
  //     BlogKoId: "1",

  //     BlogKotitle: "travel blog 3",
  //     BlogKopath: "/images/blogImage.3.jpg",
  //     BlogKodescription: "this is my travel blog",
  //     Blogbutton: "view my blog",
  //   },
  //   {
  //     BlogKoId: "1",

  //     BlogKotitle: "travel blog 1",
  //     BlogKopath: "/images/blogImage.1.jpg",
  //     BlogKodescription: "this is my travel blog",
  //     Blogbutton: "view my blog",
  //   },
  //   {
  //     BlogKotitle: "travel blog 2",
  //     BlogKopath: "/images/blogImage.2.jpg",
  //     BlogKodescription: "this is my travel blog",
  //     Blogbutton: "view my blog",
  //   },
  //   {
  //     BlogKotitle: "travel blog 3",
  //     BlogKopath: "/images/blogImage.3.jpg",
  //     BlogKodescription: "this is my travel blog",
  //     Blogbutton: "view my blog",
  //   },
  //   {
  //     BlogKotitle: "travel blog 1",
  //     BlogKopath: "/images/blogImage.1.jpg",
  //     BlogKodescription: "this is my travel blog",
  //     Blogbutton: "view my blog",
  //   },
  //   {
  //     BlogKotitle: "travel blog 2",
  //     BlogKopath: "/images/blogImage.2.jpg",
  //     BlogKodescription: "this is my travel blog",
  //     Blogbutton: "view my blog",
  //   },
  //   {
  //     BlogKotitle: "travel blog 3",
  //     BlogKopath: "/images/blogImage.3.jpg",
  //     BlogKodescription: "this is my travel blog",
  //     Blogbutton: "view my blog",
  //   },
  // ];

  //state to hold blogs array
  const [myBlogs, setMyBlogs] = useState([
    {
      BlogKoId: "1",
      BlogKotitle: "Travel To Prativa Chowk",
      BlogKopath: "/images/blogImage.1.jpg",
      BlogKodescription: "Prativa chowk ko panipuri khadai",
      Blogbutton: "view my blog",
    },
    {
      BlogKoId: "2",

      BlogKotitle: "travel blog 2",
      BlogKopath: "/images/blogImage.2.jpg",
      BlogKodescription: "this is my travel blog",
      Blogbutton: "view my blog",
    },
    {
      BlogKoId: "3",

      BlogKotitle: "travel blog 3",
      BlogKopath: "/images/blogImage.3.jpg",
      BlogKodescription: "this is my travel blog",
      Blogbutton: "view my blog",
    },
    {
      BlogKoId: "4",

      BlogKotitle: "travel blog 1",
      BlogKopath: "/images/blogImage.1.jpg",
      BlogKodescription: "this is my travel blog",
      Blogbutton: "view my blog",
    },
    {
      BlogKoId: "5",

      BlogKotitle: "travel blog 2",
      BlogKopath: "/images/blogImage.2.jpg",
      BlogKodescription: "this is my travel blog",
      Blogbutton: "view my blog",
    },
    {
      BlogKoId: "6",

      BlogKotitle: "travel blog 3",
      BlogKopath: "/images/blogImage.3.jpg",
      BlogKodescription: "this is my travel blog",
      Blogbutton: "view my blog",
    },
    {
      BlogKoId: "7",

      BlogKotitle: "travel blog 1",
      BlogKopath: "/images/blogImage.1.jpg",
      BlogKodescription: "this is my travel blog",
      Blogbutton: "view my blog",
    },
    {
      BlogKoId: "1",

      BlogKotitle: "travel blog 2",
      BlogKopath: "/images/blogImage.2.jpg",
      BlogKodescription: "this is my travel blog",
      Blogbutton: "view my blog",
    },
    {
      BlogKoId: "1",

      BlogKotitle: "travel blog 3",
      BlogKopath: "/images/blogImage.3.jpg",
      BlogKodescription: "this is my travel blog",
      Blogbutton: "view my blog",
    },
    {
      BlogKoId: "1",

      BlogKotitle: "travel blog 1",
      BlogKopath: "/images/blogImage.1.jpg",
      BlogKodescription: "this is my travel blog",
      Blogbutton: "view my blog",
    },
    {
      BlogKoId: "1",

      BlogKotitle: "travel blog 2",
      BlogKopath: "/images/blogImage.2.jpg",
      BlogKodescription: "this is my travel blog",
      Blogbutton: "view my blog",
    },
    {
      BlogKoId: "1",

      BlogKotitle: "travel blog 3",
      BlogKopath: "/images/blogImage.3.jpg",
      BlogKodescription: "this is my travel blog",
      Blogbutton: "view my blog",
    },
    {
      BlogKoId: "1",

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
  ]);
  
  const [userTypedWord, setUserTypedWord] = useState("")

  // so user le haleko kura vado vitra haldeu na tw state set garera
  const handleChange = (e)=>{
    // console.log(e.target.value);
    // user le type gareko kura k ma arixa y value=> more specific=> e.target.value okay ??
    setUserTypedWord(e.target.value)
  }

  const filteredBlogs = myBlogs.filter((blog) =>
    blog.BlogKotitle.toLowerCase().includes(userTypedWord.toLowerCase())
  );
 
  
  return (
    <>
      <input
        type="search"
        name="searchbar"
        placeholder="search blog"
        // okay so state ra input ko value lai sync ma rakhna connect garum hai tw hus
        value={userTypedWord}
        onChange={handleChange}
        className="m-4 rounded-lg border-2 border-black p-3"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-10 py-20 bg-black text-white gap-24 ">
        {/* {myBlogs.map((blog) => ( */}
        {filteredBlogs.map((blog) => (
          // we have to show each blog in card
          <Card
            title={blog.BlogKotitle}
            path={blog.BlogKopath}
            description={blog.BlogKodescription}
            button={blog.Blogbutton}
            id={blog.BlogKoId}
            dpath="blog"
          />
        ))}
      </div>
    </>
  );
};

export default Blog;
