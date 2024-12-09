"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };
  const contentVariant = {
    hidden: { opacity: 0, y: -30, top: 100 },
    show: { opacity: 1, y: 0, top: 30, transition: { duration: 0.4 } },
  };

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];
  const [isClicked, setIsClicked] = useState(false);
  const toggleNav = () => {
    setIsClicked(!isClicked);
  };
  return (
    <motion.nav
      variants={container}
      initial="hidden"
      whileInView="show"
      className="pb-2"
    >
      <motion.div className=" ">
        <motion.div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/assets/images/logo.svg"
                className="h-[4.5rem] md:h-20 w-auto"
                width={400}
                height={400}
                alt="Logo"
              />
            </Link>
          </motion.div>
          {/* Medium and Up devices */}
          <motion.div className="hidden sm:block">
            <motion.div className="mr-3 flex items-center space-x-4">
              {links.map((link, index) => (
                <motion.div key={index} variants={contentVariant}>
                  <Link
                    href={link.href}
                    className="text-slate-900 hover:bg-gray-700 hover:text-white
                  rounded-md px-3 py-2 text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Mobile */}
          <motion.div className="sm:hidden flex items-center">
            <button
              onClick={toggleNav}
              className="mr-2 inline-flex items-center justify-center p-2 rounded-md
               text-black hover:text-black focus:outline-none focus:ring-2 
               focus:ring-inset focus:ring-black"
            >
              {isClicked ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
      {isClicked && (
        <motion.div className="sm:hidden min-w-max">
          <motion.div className="mx-auto pt-2 pb-3 space-y-1">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="block p-2 text-black hover:bg-slate-600
                   hover:text-white rounded-lg"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
