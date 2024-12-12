import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";

const Contact = () => {
  return (
    <>
      <div className="sm:w-11/12 mx-auto pb-10">
        <Navbar />
        <h1 className="text-slate-900 text-center font-bold text-3xl">
          Contact Us
        </h1>
        <hr className="text-left w-14 border-2 border-[#29AAE3] mx-auto mt-3" />
        <div className="grid grid-cols-1 pt-5 sm:pt-20 md:grid-cols-2 ">
          {/* Form */}
          <div className="">
            <form className="w-full h-full p-5">
              {/* Name and Email */}
              <div className="pb-5 flex">
                {/* Name */}
                <div className="flex sm:w-full items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    className=" min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                  />
                </div>
                {/* Email */}
                <div className="ml-5 sm:w-full sm:ml-10 flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Email"
                    className=" min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                  />
                </div>
              </div>
              {/* Subject */}
              <div className=" flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                <input
                  id="subject"
                  name="emaisubject"
                  type="text"
                  placeholder="Email"
                  className=" min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                />
              </div>
              {/* Message */}
              <div>
                <div className="mt-5 flex">
                  <div className="w-full flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      cols="50"
                      placeholder="Message"
                      className=" min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>
              {/* Submit button */}
              <button
                className=" text-white bg-[#29AAE3] rounded
              w-full sm:w-40 h-12 mt-5"
              >
                <div className="flex w-fit mx-auto">
                  <span className="sm:ml-3 font-medium">Submit</span>
                  <span className="text-slate-50 w-fit">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 26 25"
                      className="ml-3 fill-current"
                    >
                      <path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z" />
                    </svg>
                  </span>
                </div>
              </button>
            </form>
          </div>
          {/* Google Map */}
          <div className=" w-full mx-auto">
            <iframe
              className="w-96 mx-auto sm:mx-0 sm:w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.1705533549107!2d150.83106517461638!3d-33.78209361457123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129a6d92194383%3A0x5473a41ed47de5d4!2s35%20John%20St%2C%20Rooty%20Hill%20NSW%202766%2C%20Australia!5e0!3m2!1sen!2sph!4v1733857011019!5m2!1sen!2sph"
              width="500"
              height="350"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
