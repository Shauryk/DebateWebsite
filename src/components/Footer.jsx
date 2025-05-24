import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full mt-10 py-4 px-4 md:pl-64 text-center md:text-left flex justify-center text-sm">
      <p>
        © {new Date().getFullYear()} DebateGo. All rights reserved. |{" "}
        <Link
          to="/privacy-policy"
          className="text-blue-600 hover:underline"
        >
          Privacy Policy
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
