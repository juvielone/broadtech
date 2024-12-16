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
            <div className="flex">
              {/* Email */}
              <div className="flex ml-5">
                <span>
                  <svg width="32" height="36" viewBox="0 0 32 36" fill="none">
                    <path
                      d="M3.20508 10.3882L16.0003 17.4468L28.7955 10.3882C28.7481 9.48862 28.3908 8.64301 27.7968 8.02462C27.2028 7.40623 26.4169 7.06185 25.6003 7.06201H6.40028C5.58361 7.06185 4.79779 7.40623 4.20376 8.02462C3.60973 8.64301 3.25244 9.48862 3.20508 10.3882Z"
                      fill="#29AAE3"
                    />
                    <path
                      d="M28.8002 14.3325L16.0002 21.3946L3.2002 14.3325V24.7173C3.2002 25.6538 3.53734 26.5519 4.13745 27.2141C4.73757 27.8763 5.5515 28.2483 6.4002 28.2483H25.6002C26.4489 28.2483 27.2628 27.8763 27.8629 27.2141C28.4631 26.5519 28.8002 25.6538 28.8002 24.7173V14.3325Z"
                      fill="#29AAE3"
                    />
                  </svg>
                </span>
                <h2 className="font-semibold ml-2">
                  levy@broadtechsolutions.com.au
                </h2>
              </div>
              {/* Phone */}
              <div className="flex ml-5">
                <span>
                  <svg
                    width="35px"
                    height="35px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z"
                      fill="#29AAE3"
                    />
                  </svg>
                </span>
                <h2 className="font-semibold ml-2">0433 011 914 </h2>
              </div>
            </div>
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
                  <span className="text-slate-50 w-fit ml-3">
                    <svg width="25" height="25" viewBox="0 0 32 35" fill="none">
                      <path
                        d="M29.5818 1.10282L0.811304 14.3524C-0.131888 14.7868 -0.288333 16.1767 0.530415 16.8483L5.86623 21.2253L30.035 1.84006C30.3561 1.48876 30.0004 0.910023 29.5818 1.10282Z"
                        fill="white"
                      />
                      <path
                        d="M31.3401 2.97546L31.086 3.17922L11.5146 24.5855L21.5513 31.9038C22.2785 32.4341 23.2676 32.0629 23.544 31.156L31.9774 3.48361C32.105 3.06503 31.6654 2.71455 31.3401 2.97546Z"
                        fill="white"
                      />
                      <path
                        d="M7.74902 33.935L13.9465 28.4734L10.6306 26.0557L7.74902 33.935Z"
                        fill="white"
                      />
                      <path
                        d="M9.68263 24.1005L9.68295 24.1001L20.7183 12.0302C20.8917 11.8406 20.6583 11.5431 20.4606 11.7016L6.66504 22.7667V32.1606L9.50485 24.3956C9.54666 24.2814 9.60796 24.1823 9.68263 24.1005Z"
                        fill="white"
                      />
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
