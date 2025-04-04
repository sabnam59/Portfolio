import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="bg-black">
        <div className="mx-auto">
          <h2 className="font-bold text-4xl text-center text-stone-100 mb-10">
            Contact Me
          </h2>

          <div className="flex justify-center">
            <htmlform className="flex flex-col boredr-2 border-blue-500 rounded-2xl bg-white px-10 py-15 bg-">
              <div className="flex flex-col gap-2 mb-3">
                <label htmlFor="username" className="text-xl font-bold ">
                  Full Name
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="enter yout full name"
                  className="border-1 bg-gray-50 border-gray-500 px-2 py-2 w-120 rounded-lg required"
                />
              </div>

              <div className="flex flex-col gap-2 mb-3">
                <label htmlFor="email" className="text-xl font-bold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="enter your email"
                  className="border-1 border-gray-500 px-2 py-2 w-120 rounded-lg required bg-gray-50"
                />
              </div>

              <div className="flex flex-col gap-2 mb-8">
                <label htmlFor="message" className="font-bold text-xl">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="6"
                  className="border-1 bg-gray-50 border-gray-500 px-2 py-2 w-120 rounded-lg required"
                >
                  type a message
                </textarea>
              </div>

              <button className="">
                <span className="bg-black text-white px-5 py-2 rounded-lg cursor-pointer">
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
