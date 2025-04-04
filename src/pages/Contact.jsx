import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="bg-black pt-5 py-10">
        <div className="mx-auto">
          <h2 className="font-bold text-4xl text-center text-stone-100 mb-10">
            Contact Me
          </h2>

          <div className="flex justify-center ">
            <htmlform className="flex flex-col boredr-2 rounded-2xl bg-white md:px-10 px-4 py-14">
              <div className="flex flex-col gap-2 mb-3 ">
                <label htmlFor="username" className="lgtext-xl text-l xl:text-2xl md:font-bold font-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="enter your full name"
                  className="bg-gray-50 border border-1 border-gray-500 px-2 lg:py-3 py-2 xl:w-[500px] md:w-[400px] w-64 rounded-lg lg:text-xl required"
                />
              </div>

              <div className="flex flex-col gap-2 mb-3">
                <label htmlFor="email" className="lg:text-xl text-l md:font-bold font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="enter your email"
                  className="border border-1 border-gray-500 px-2 lg:py-3 py-2 rounded-lg lg:text-xl required bg-gray-50"
                />
              </div>

              <div className="flex flex-col gap-2 mb-8">
                <label htmlFor="message" className="md:font-bold font-semibold lg:text-xl text-l">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="8"
                  placeholer="type a message"
                  className="border border-1 bg-gray-50 border-gray-500 px-2 py-2 rounded-lg required"
                >
                </textarea>
              </div>

              <button className="">
                <span className="bg-black text-xl text-white px-5 py-2 rounded-lg cursor-pointer">
                  send message
                </span>
              </button>
            </htmlform>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
