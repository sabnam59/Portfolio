import axios from "axios";
import React, { useState } from "react";

const Contact = () => {

  const [contactData, setcontactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const {name,value} = e.target

    setcontactData({...contactData,[name]:value})
  };

  const handleSubmit = async(e)=>{

    e.preventDefault()
    console.log("handleSubmit vitra ko code chalo hai tw")

    // console.log(contactData)
    const data = {
      name : contactData.name,
      email : contactData.email,
      message : contactData.message
    }
  
    await axios.post("https://getform.io/f/byvkdmda",data);

  }
  console.log(contactData);

 

  return (
    <>

    <div>
      <section className="bg-black pt-5 py-10">
        <div className="mx-auto">
          <h2 className="font-bold text-4xl text-center text-stone-100 mb-10">
            Contact Me
          </h2>

          <div className="flex justify-center ">
          
            <form onSubmit={handleSubmit} className="flex flex-col boredr-2 rounded-2xl bg-white md:px-10 px-4 py-14">
              <div className="flex flex-col gap-2 mb-3 ">
                <label
                  htmlFor="username"
                  className="lgtext-xl text-l xl:text-2xl md:font-bold font-semibold"
                >
                  Full Name
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="name"
                  value={contactData.name}
                  placeholder="enter your full name"
                  className="bg-gray-50 border border-1 border-gray-500 px-2 lg:py-3 py-2 xl:w-[400px] md:w-[300px] w-64 rounded-lg lg:text-xl required"
                />
              </div>

              <div className="flex flex-col gap-2 mb-3">
                <label
                  htmlFor="email"
                  className="lg:text-xl text-l md:font-bold font-semibold"
                >
                  Email
                </label>
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  value={contactData.email}
                  placeholder="enter your email"
                  className="border border-1 border-gray-500 px-2 lg:py-3 py-2 rounded-lg lg:text-xl required bg-gray-50"
                />
              </div>

              <div className="flex flex-col gap-2 mb-8">
                <label
                  htmlFor="message"
                  className="md:font-bold font-semibold lg:text-xl text-l"
                >
                  Message
                </label>
                <textarea
                  onChange={handleChange}
                  name="message"
                  value={contactData.message}
                  id="message"
                  rows="8"
                  placeholer="type a message"
                  className="border border-1 bg-gray-50 border-gray-500 px-2 py-2 rounded-lg required"
                ></textarea>
              </div>

              <button type="submit" className="">
                <span className="bg-black text-xl text-white px-5 py-2 rounded-lg cursor-pointer">
                  send message
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>

  </>
  );
};

export default Contact;
