import React, { FC, useEffect } from "react";
import { useAppSelector } from "../app/hooks";
import { selectTheme } from "../features/theme/themeReducer";

const Contact: FC = () => {
  const theme = useAppSelector(selectTheme);

  useEffect(() => {}, [theme]);
  return (
    <div id="contact-bg" className="bg-gradient-to-t from-yellow-700 to-orange-600 dark:from-indigo-900 dark:to-sky-900 w-full h-screen flex flex-col items-center pt-[2rem]">
      <h1 className="text-6xl h-[8rem] section-title w-full flex items-center justify-center mt-10 mb-6 dark:text-[#eee8bf]">
        Contact
      </h1>
      <p id="name" className="text-3xl mb-4 mt-4 dark:text-[#eee8bf]">
        Get in touch. Let's build something amazing together!
      </p>
      <form
        action="mailto:jkroslowitz@gmail.com"
        method="POST"
        name="ContactForm"
        className="w-4/6 h-4/6 flex flex-col items-center p-2"
      >
        <input
          type="email"
          placeholder="Email"
          color="white"
          className="bg-orange-800 dark:bg-slate-800 h-[4rem] rounded-md mb-3 w-full p-4 text-[#eee8bf]"
        />
        <input
          type="text"
          placeholder="Name"
          className="bg-orange-800 dark:bg-slate-800 h-[4rem] rounded-md mb-3 w-full p-4 text-[#eee8bf]"
        />
        <textarea
          placeholder="Your message"
          name="message"
          rows={6}
          className="bg-orange-800 dark:bg-slate-800 rounded-md h-[20rem] mb-3 w-full p-4 text-[#eee8bf]"
        ></textarea>
        <button
          id="name"
          type="submit"
          className="text-4xl border-black dark:border-[#eee8bf] border-4 w-2/3 dark:text-[#eee8bf]"
        >
          submit
        </button>
      </form>
      {theme == "dark" ? (
        <div className="w-full h-full relative">
          <div id="contact-arrow-dark" className="absolute bottom-[-10rem]" />
        </div>
      ) : (
        <div className="w-full h-full relative">
          <div id="contact-arrow" className="absolute bottom-[-10rem]" />
        </div>
      )}
    </div>
  );
};

export default Contact;
