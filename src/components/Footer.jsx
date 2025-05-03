import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="ml-64 mt-10 py-4 text-center text-gray-600 text-sm">
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
