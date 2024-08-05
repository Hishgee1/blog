import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-50 pb-6">
        <div className="w-[1216px] m-auto flex flex-col justify-between  md:flex-row py-10 ">
          <div className="w-72">
            <div className="w-72">
              <h5 className="text-gray-800 font-bold text-2xl pb-4 ">About</h5>
              <p className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
            <div className="w-52 h-13">
              <p className="font-semibold">Email : info@jstemplate.net</p>
              <p className="font-semibold">Phone : 880 123 456 789</p>
            </div>
          </div>

          <div className="w-100">
            <p className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Home
            </p>
            <p className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Blog
            </p>
            <p className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Contact
            </p>
          </div>

          <div className="p-5 ">
            <ul>
              <div className="flex gap-6 pb-5">
                <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
                <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
                <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
                <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
              </div>
            </ul>
          </div>
        </div>
        <div className="divide-y divide-green-200 w-[1216px] m-auto">
          <div className="flex justify-between ">
            <img src="/images/Logo.png" alt="" />
            <ul className="flex gap-4">
              <li>Terms of use</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
