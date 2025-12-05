import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 bg-[#0a0f1c] border-t border-gray-700 text-white mt-10">
      <div className="max-w-5xl mx-auto text-center">

        {/* Copyright Text */}
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Dibyanshu Sah • All Rights Reserved
        </p>

      </div>
    </footer>
  );
};

export default Footer;
