import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  const address = process.env.NEXT_PUBLIC_ADDRESS;
  const contactNumber = process.env.NEXT_PUBLIC_CONTACT_NUMBER;
  const email = process.env.NEXT_PUBLIC_EMAIL;

  return (
    <footer className=" text-gray-400 py-10 flex flex-col bg-slate-800">
      <div className="text-gray-400 flex sm:flex-row flex-col ">
        <div className="flex-3 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:order-1 order-2">
          {/* Reach Us Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Reach us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Link href={"tel:" + contactNumber} className="flex">
                  <FaPhone className="mr-2" />
                  {contactNumber}
                </Link>
              </li>
              <li className="flex items-center">
                <Link href={"mailto:" + email} className="flex">
                  <FaEnvelope className="mr-2" />
                  {email}
                </Link>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                {address}
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/aboutUs">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/blog">Blogs</Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          {/* <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>Privacy Policy</li>
              <li>Terms & Services</li>
              <li>Terms of Use</li>
              <li>Refund Policy</li>
            </ul>
          </div> */}

          {/* Quick Links Section */}
          {/* <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/portfolio"> Portfolio</Link>
              </li>
            </ul>
          </div> */}
        </div>
        {/* <div className="flex-2 sm:order-2 order-1 mb-[48px]">
          <NewsletterSignup />
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
