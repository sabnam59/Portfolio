import React, { useState } from "react";
import Card from "../../components/Card";
import NotFound from "../../components/NotFound";
import BlogData from "../../data/BlogData";

const Blog = () => {
  const [myBlogs, setMyBlogs] = useState(BlogData);

  const [userTypedWord, setUserTypedWord] = useState("");
  
  const handleChange = (e) => {
    setUserTypedWord(e.target.value);
  };

  const filteredBlogs = myBlogs.filter((blog) =>
    blog.Blogtitle.toLowerCase().includes(userTypedWord.toLowerCase())
  );

  const NotFoundText = "Blog not found";

  return (
    <>
      <div className="bg-black flex justify-start px-3 lg:px-16 md:px-12 md:pt-10 xl:pl-40 pt-10">
        <input
          type="search"
          name="searchbar"
          placeholder="search blog"
          value={userTypedWord}
          onChange={handleChange}
          className=" rounded-lg border-4 border-gray-700 lg:py-3 lg:px-5 py-2 px-4 "
        />
      </div>

      {filteredBlogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-4 py-10 bg-black text-white gap-24 lg:px-16 md:px-12 md:gap-12 lg:gap-24 xl:pl-40">
          {filteredBlogs.map((blog) => (
            <Card
              key={blog.BlogId}
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
        <NotFound text={NotFoundText} />
      )}
    </>
  );
};

export default Blog;
