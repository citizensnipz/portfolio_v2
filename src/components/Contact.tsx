import React, { FC } from "react";

const Contact: FC = () => {
  return (
    <div className="bg-gradient-to-t from-yellow-700 to-orange-600 w-full h-screen flex flex-col items-center">
      <h1 className="text-6xl h-[8rem] section-title w-full flex items-center justify-center mt-10 mb-6">
        Contact
      </h1>
      <p id="name" className="text-3xl mb-4 mt-4">
        Get in touch. Let's build something amazing together!
      </p>
      <form className="w-4/6 h-4/6 flex flex-col items-center p-2">
        <input
          type="text"
          placeholder="Email"
          color="white"
          className="bg-orange-800 h-[4rem] rounded-md mb-3 w-full p-4 text-white"
        />
        <input
          type="text"
          placeholder="Name"
          className="bg-orange-800 h-[4rem] rounded-md mb-3 w-full p-4 text-white"
        />
        <textarea
          placeholder="Your message"
          name="message"
          rows={6}
          className="bg-orange-800 rounded-md h-[20rem] mb-3 w-full p-4 text-white"
        ></textarea>
        <button
          id="name"
          type="submit"
          className="text-4xl border-black border-4 w-2/3"
        >
          submit
        </button>
      </form>
      <div className="w-full h-full relative">
        <div id="contact-arrow" className="absolute bottom-[-10rem]"/>
      </div>
    </div>
  );
};

export default Contact;
