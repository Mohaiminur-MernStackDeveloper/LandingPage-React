import React from "react";
import { BsMeta } from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[url(https://www.korda-thueringen.de/files/publisher/images/leistungen/hotel/korda-hotel-headbanner.jpg)] min-h-[450px] bg-no-repeat bg-cover bg-gray-500 bg-blend-multiply">
      <div className="w-11/12 mx-auto h-full grid grid-cols-3 justify-center gap-10 items-center py-10 text-white">
        <div>
          <h1 className="text-2xl font-serif mb-5">Our Facilities</h1>
          <div className="flex justify-start text-sm text-gray-300 items-start gap-5">
            <ul className="leading-8">
              <li>Indian Menu</li>
              <li>Menu Items</li>
              <li>Private Event</li>
              <li>Italian Menu</li>
              <li>Best Offers</li>
            </ul>
            <ul className="leading-8">
              <li>Popular Items</li>
              <li>Regular Menu</li>
              <li>New Food</li>
              <li>Special Offers</li>
            </ul>
          </div>
        </div>
        <div className="border border-gray-600 h-full rounded-full flex flex-col justify-center items-center space-y-2 py-32">
          <img src="/src/assets/logo.PNG" alt="" />
          <h1>Established . 2022</h1>
          <div className="flex justify-center items-center gap-3 text-primary">
            <hr className="w-16 text-primary" />
            <BsMeta className="text-primary" />
            <hr className="w-16" />
          </div>
          <div className="mt-5 flex justify-center items-center gap-5">
            <FaFacebookF className="text-gray-500" />
            <FaInstagram className="text-gray-500" />
            <FaLinkedinIn className="text-gray-500" />
            <FaTwitter className="text-gray-500" />
          </div>
        </div>
        <div>
          <h1 className="text-2xl mb-2 font-serif">Address Info</h1>
          <table className="table-auto font-Inter">
            <th className="text-primary">
              <tr>Phone:</tr>
              <tr>Email:</tr>
              <tr>Fax ID:</tr>
              <tr>Location:</tr>
            </th>
            <td>
              <tr>+880-1776-766-767</tr>
              <tr>info.example@gmail.com</tr>
              <tr>+99-75667-786</tr>
              <tr>Mirpur DOHS,House-167/170,Road-02 Avenue-01.</tr>
            </td>
          </table>
        </div>
      </div>
      <div className="border-t w-11/12 mx-auto py-2 font-Inter flex justify-between border-gray-600 text-gray-300 text-sm ">
        <h1>@copyright by Egenslab-202, All Right Reserved</h1>
        <span>Privacy & Policy | Terms and Conditions</span>
      </div>
    </div>
  );
};

export default Footer;
