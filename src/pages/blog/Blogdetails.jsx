import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogData from "../../data/BlogData";

const Blogdetails = () => {
  const { id } = useParams();

  const [blogData, setblogData] = useState({});

  useEffect(() => {
    const userLeClickGarekoBlog = BlogData.filter((blog) => blog.BlogId === id);

    const blog = userLeClickGarekoBlog[0];
    setblogData(blog);
  }, [id]);

  return (
    <div className="px-5 bg-black text-white py-16  md:pl-20 xl:px-36">
      <h1 className="uppercase flex justify-start lg:text-5xl text-3xl font-bold mb-16">
        {blogData.Blogtitle}
      </h1>
      <h2 className="md:text-2xl text-xl font-semibold mb-12 underline underline-offset-4 md:pr-20 lg:text-3xl">
        Wanderlust Chronicles: Exploring the World One Journey at a Time
      </h2>
      <p className="md:pr-20 md:text-xl mb-16 text-l lg:text-2xl">
        {blogData.Blogdescription}
      </p>
      <h2 className="text-2xl font-semibold py-5 mb-5 underline underline-offset-4 lg:text-3xl">
        A Passion For Travel
      </h2>
      <p className="md:pr-32 text-l mb-16 md:text-xl lg:text-2xl">
        {blogData.Blogdescription1 ? `${blogData.Blogdescription1}` : ""}
      </p>

      <h2 className="text-xl font-semibold underline mb-14 md:text-2xl lg:text-3xl">
        Here Are Some Glimpses Of The Places I Visited!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 roundel-xl py-8">
        <img src={blogData.Blogpath} />
        {blogData.BlogImage1 && <img src={blogData.BlogImage1} />}
        <img src="/images/exploring.jpg" />
        <img src="/images/exploring.4.webp" />
        <img src="/images/exploring.3.jpg" />
        <img src="/images/exploring.2.jpg" />
        <img src="/images/exploring.5.jpg" />
      </div>
      <h2 className="text-xl font-bold underline pt-12 mb-8 md:text-2xl lg:text-3xl xl:text-4xl">
        Let’s Explore Together
      </h2>
      <p className="md:pr-36 text-l md:text-xl lg:text-2xl">
        Through my travel blog, I invite you to join me on this incredible
        journey of discovery. Every place I visit holds its own charm, mystery,
        and beauty, and I can’t wait to share these experiences with you. If
        you’re seeking inspiration, travel tips, or just a little escape to
        far-flung destinations, I hope my blog can be a guide to help you see
        the world in a new light.
      </p>
    </div>
  );
};

export default Blogdetails;
