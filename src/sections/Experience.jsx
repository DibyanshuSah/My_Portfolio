import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 px-6 max-w-6xl mx-auto text-white">
      <h2 className="text-4xl font-bold text-center">Experience</h2>
      <div className="w-28 h-1 bg-blue-500 mx-auto mt-2 mb-12 rounded-full"></div>
      <div className="relative border-l-2 border-blue-500 pl-10">
        {/* Experience 1 */}
        <div className="mb-10 relative">
          <span className="absolute -left-[13px] top-2 w-6 h-6 bg-blue-500 rounded-full border-2 border-blue-300 shadow-lg" />
          <div className="bg-[#111827] p-6 rounded-xl shadow-xl border border-blue-500 hover:border-blue-400 transition-all duration-300 hover:shadow-[0_0_15px_rgba(29,78,216,0.4)]">
            <h3 className="text-2xl font-bold text-blue-300 leading-tight">
              Endpoint Security Consultant</h3>
            <p className="text-blue-400 font-medium mb-4">
              Consulting Project</p>
            <div className="flex items-center gap-6 text-gray-400 mb-4 flex-wrap">
              <span className="flex items-center gap-2">
                <BsCalendarDate className="text-blue-400" />
                May 2025 – Present</span>
              <span className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-400" />
                Astadik Civiltech LLP
              </span>
            </div>
<ul className="space-y-2 text-gray-300">
  <li>
    • Enhanced endpoint security posture by implementing controls that reduced 
    unauthorized data movement and improved operational visibility.
  </li>
  <li>
    • Deployed and configured endpoint protection measures remotely using AnyDesk, 
    including USB device and storage restrictions.
  </li>
  <li>
    • Leveraged <strong className="text-blue-400"> ActivTrak </strong> to monitor user activity, application usage, and web 
    access for improved security oversight.
  </li>
  <li>
    • Implemented device control policies to mitigate risks associated with 
    unauthorized file transfers and removable media usage.
  </li>
  <li>
    • Collaborated with company leadership to align security controls 
    with organizational data protection and compliance objectives.
  </li>
  <li>
    • Produced deployment documentation and operational recommendations for 
    sustainable endpoint security management.
  </li>
</ul>
            <div className="flex flex-wrap gap-2 mt-4">
              {[
                "Endpoint Security",
                "Windows Security",
                "Device Control",
                "ActivTrak",
                "Security Monitoring",
                "Data Loss Prevention (DLP)",
              ].map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-800 rounded-md text-sm text-gray-300 border border-blue-500">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* Experience 2 */}
        <div className="relative">
          <span className="absolute -left-[13px] top-2 w-6 h-6 bg-blue-500 rounded-full border-2 border-blue-300 shadow-lg" />
          <div className="bg-[#111827] p-6 rounded-xl shadow-xl border border-blue-500 hover:border-blue-400 transition-all duration-300 hover:shadow-[0_0_15px_rgba(29,78,216,0.4)]">
            <h3 className="text-2xl font-bold text-blue-300 leading-tight">
              Cyber Security Analyst
            </h3>
            <p className="text-blue-400 font-medium mb-4">
              Research Project
            </p>
            <div className="flex items-center gap-6 text-gray-400 mb-4 flex-wrap">
              <span className="flex items-center gap-2">
                <BsCalendarDate className="text-blue-400" />
                January 2025
              </span>
              <span className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-400" />
                NIT Rourkela
              </span>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li>
                • Discovered and reported critical security vulnerabilities
                through authorized penetration testing of enterprise webmail
                systems.
              </li>
              <li>
                • Utilized Burp Suite for in-depth security analysis,
                including interception, enumeration, and exploitation of
                web application components.
              </li>
              <li>
                • Conducted systematic vulnerability assessments following
                the
                <strong className="text-blue-400"> OWASP Top 10 </strong>
                framework, strengthening institutional security posture.
              </li>
              <li>
                • Improved practical ethical hacking proficiency by
                identifying high-impact flaws and demonstrating real-world
                exploitation scenarios.
              </li>
              <li>
                • Documented findings with remediation strategies, enabling
                targeted security enhancements and risk mitigation.
              </li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              {[
                "Burp Suite",
                "OWASP",
                "Vulnerability Assessment",
                "Ethical Hacking",
              ].map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-800 rounded-md text-sm text-gray-300 border border-blue-500">{tag}
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