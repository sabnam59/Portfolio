import React from 'react'

const Blogdetails = () => {
  return (
    <div className="px-60 bg-black text-white py-16">
      <h1 className="uppercase flex justify-center text-5xl font-bold mb-16">My travel blog</h1>
      <h2 className='text-2xl font-semibold underline underline-offset-4 mb-5'>Wanderlust Chronicles: Exploring the World One Journey at a Time</h2>
      <p className='pr-20 mb-16 text-xl'>
        Hello fellow adventurers and wanderers! Welcome to my little corner of
        the web, where I share my travels, discoveries, and the beautiful
        experiences I’ve had around the world. Whether it's uncovering hidden
        gems in far-off cities or enjoying the quiet beauty of nature, I’m
        passionate about telling the stories that make every trip unique and
        unforgettable.
      </p>
      <h2 className='text-2xl font-semibold underline underline-offset-4 py-5'>A Passion For Travel</h2>
      <p className='pr-32 mb-16 text-xl'>
        Travel has always been a way for me to connect with people, culture, and
        nature in ways words can hardly express. Every journey opens my eyes to
        new perspectives, challenges, and unforgettable memories. Through my
        travel blog, I aim to inspire you to pack your bags, step out of your
        comfort zone, and discover the world in all its wonder.
      </p>

      <h2 className='text-2xl font-semibold underline mb-7'>Here Are Some Glimpses Of The Places I Visited!</h2>
      <div className="grid grid-cols-2 gap-20 roundel-xl">
        <img src="/images/exploring.jpg" />
        <img src="/images/exploring.4.webp" />
        <img src="/images/exploring.3.jpg" />
        <img src="/images/exploring.2.jpg" />
        <img src="/images/exploring.5.jpg" />
      </div>
      <h2 className='text-2xl font-bold underline pt-12 pb-5'>Let’s Explore Together</h2>
      <p className='pr-36 text-xl'>
        Through my travel blog, I invite you to join me on this incredible
        journey of discovery. Every place I visit holds its own charm, mystery,
        and beauty, and I can’t wait to share these experiences with you. If
        you’re seeking inspiration, travel tips, or just a little escape to
        far-flung destinations, I hope my blog can be a guide to help you see
        the world in a new light.
      </p>
    </div>
  );
}

export default Blogdetails