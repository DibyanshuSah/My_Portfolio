import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 max-w-6xl mx-auto text-white">

      {/* Heading */}
      <h2 className="text-4xl font-bold text-center">Experience</h2>

      {/* Blue Underline (Centered) */}
      <div className="w-28 h-1 bg-blue-500 mx-auto mt-2 mb-12 rounded-full"></div>

      {/* Timeline Line */}
      <div className="relative border-l-2 border-blue-500 pl-10">

        {/* Experience Card */}
        <div className="mb-1 relative">

          {/* Blue Dot */}
          <span className="absolute -left-[13px] top-2 w-6 h-6 bg-blue-500 rounded-full 
                           border-2 border-blue-300 shadow-lg" />

          {/* Experience Card Box */}
          <div
            className="
              bg-[#111827] p-6 rounded-xl shadow-xl 
              border border-blue-500 
              hover:border-blue-400 
              transition-all duration-300 
              hover:shadow-[0_0_15px_rgba(29,78,216,0.4)]
            "
          >

            {/* Title */}
            <h3 className="text-2xl font-bold text-blue-300 leading-tight">
              Cyber Security Research
            </h3>

            {/* Subtitle */}
            <p className="text-blue-400 font-medium mb-4">Research Project</p>

            {/* Date & Location */}
            <div className="flex items-center gap-6 text-gray-400 mb-4">
              <span className="flex items-center gap-2">
                <BsCalendarDate className="text-blue-400" /> January 2025
              </span>

              <span className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-400" /> NIT Rourkela
              </span>
            </div>

            {/* Updated Professional Description */}
            <ul className="space-y-2 text-gray-300">
              <li>
                • Discovered and reported critical security vulnerabilities through 
                  authorized penetration testing of enterprise webmail systems.
              </li>

              <li>
                • Utilized Burp Suite for in-depth security analysis, including interception,
                  enumeration, and exploitation of web application components.
              </li>

              <li>
                • Conducted systematic vulnerability assessments following the 
                  <strong className="text-blue-400"> OWASP Top 10 </strong> framework, 
                  strengthening institutional security posture.
              </li>

              <li>
                • Improved practical ethical hacking proficiency by identifying high-impact 
                  flaws and demonstrating real-world exploitation scenarios.
              </li>

              <li>
                • Documented findings with remediation strategies, enabling targeted 
                  security enhancements and risk mitigation.
              </li>
            </ul>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {[
                "Burp Suite",
                "OWASP",
                "Vulnerability Assessment",
                "Ethical Hacking",
              ].map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-800 rounded-md text-sm text-gray-300 border border-blue-500"
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
