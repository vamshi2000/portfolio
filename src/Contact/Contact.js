import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-blue-50 pt-10 pb-10 p-5 dark:bg-gray-800 dark:text-white"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3">
          <div className="grid col-span-1">
            <div className="text-4xl text-center mb-2 md:p-5">Contact</div>
          </div>
          <div className="grid col-span-2">
            <div>
              <form className="">
                <div className="mb-4">
                  <input
                    className="border border-transparent p-2 rounded-md shadow w-full focus:ring-4 focus:outline-none  focus:ring-pink-900 focus:border-transparent"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="border border-transparent p-2 rounded-md shadow w-full focus:ring-4 focus:outline-none  focus:ring-pink-900 focus:border-transparent"
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    className="border border-transparent p-2 rounded-md shadow w-full focus:ring-4 focus:outline-none  focus:ring-pink-900 focus:border-transparent"
                    id="message"
                    name="message"
                    rows="4"
                    cols="50"
                  />
                </div>
                <div>
                  <button className="p-2 pl-6 pr-6 border rounded-lg bg-pink-900 hover:bg-pink-900 dark:hover:bg-custom-teal focus:outline-none focus:ring-2 focus:ring-pink-900 focus:ring-opacity-50 text-white dark:bg-custom-teal dark:text-black dark:outline-none dark:focus:ring-custom-teal ">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
