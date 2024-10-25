import React from "react";

function Footer() {
  return (
    <footer className="text-white_primary p-6 text-center border-t-4 border-light_gray shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-lg font-semibold mb-2 md:mb-0">
          © 2024 Hotel Management System. All rights reserved.
        </p>
        <div className="space-x-4">
          <a
            href="#"
            className=" hover: hover:underline transition duration-300 ease-in-out"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className=" hover: hover:underline transition duration-300 ease-in-out"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className=" hover: hover:underline transition duration-300 ease-in-out"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
