"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const toggleNav = () => {
    setIsClicked(!isClicked);
  };
  return (
    <nav className="pb-2">
      <div className=" ">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/assets/images/logo.svg"
                className="h-[4.5rem] md:h-20 w-auto"
                width={400}
                height={400}
                alt="Logo"
              />
            </Link>
          </div>
          {/* Medium and Up devices */}
          <div className="hidden sm:block">
            <div className="mr-3 flex items-center space-x-4">
              <Link
                className="text-slate-900 hover:bg-gray-700 hover:text-white
                      rounded-md px-3 py-2 text-sm font-medium"
                href="/"
              >
                Dashboard
              </Link>
              <Link
                className="text-slate-900 hover:bg-gray-700 hover:text-white
                      rounded-md px-3 py-2 text-sm font-medium"
                href="/"
              >
                About
              </Link>
              <Link
                className="text-slate-900 hover:bg-gray-700 hover:text-white
                      rounded-md px-3 py-2 text-sm font-medium"
                href="/"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile */}
          <div className="sm:hidden flex items-center">
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
          </div>
        </div>
      </div>
      {isClicked && (
        <div className="sm:hidden min-w-max">
          <div className="mx-auto pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block p-2 text-black hover:bg-slate-600 hover:text-white rounded-lg"
            >
              Home
            </Link>
            <Link
              href="/"
              className="block p-2 text-black hover:bg-slate-600 hover:text-white rounded-lg"
            >
              About
            </Link>
            <Link
              href="/"
              className="block p-2 text-black hover:bg-slate-600 hover:text-white rounded-lg"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
