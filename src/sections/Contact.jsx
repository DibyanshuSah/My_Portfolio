import {FaEnvelope,FaInstagram,FaLinkedin,FaMapMarkerAlt,} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-10 max-w-[1800px] mx-auto text-white">
      <h2 className="text-4xl font-bold text-center">
        Get in Touch
      </h2>
      <div className="w-32 h-1 bg-blue-500 mx-auto mt-2 mb-12 rounded-full"></div>
      <p className="text-center text-gray-300 text-lg mb-12">
        Open to internships, collaborations, and exciting opportunities.
        Feel free to reach out anytime.
      </p>
      <div className="flex flex-wrap justify-center gap-5">
        
        {/* Email */}
        <a
          href="mailto:dibyanshusah0@gmail.com"
          className="bg-[#0B1630] border border-blue-500 rounded-2xl px-8 py-6 min-w-[420px] 
          hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] transition-all duration-300">
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-blue-400 text-3xl flex-shrink-0" />
            <span className="text-xl font-medium whitespace-nowrap">
              dibyanshusah0@gmail.com
            </span>
          </div>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/dibyanshusah/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0B1630] border border-blue-500 rounded-2xl px-7 py-6 min-w-[250px]
          hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] transition-all duration-300">
          <div className="flex items-center gap-4">
            <FaInstagram className="text-blue-400 text-3xl flex-shrink-0" />
            <span className="text-xl font-medium">
              Instagram
            </span>
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/dibyanshu-sah-706193340/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0B1630] border border-blue-500 rounded-2xl px-7 py-6
            min-w-[250px] hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] transition-all duration-300">
          <div className="flex items-center gap-4">
            <FaLinkedin className="text-blue-400 text-3xl flex-shrink-0" />
            <span className="text-xl font-medium">
              LinkedIn
            </span>
          </div>
        </a>

        {/* Location */}
        <div
          className="bg-[#0B1630] border border-blue-500 rounded-2xl
            px-7 py-6 min-w-[280px] hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] transition-all duration-300">
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-blue-400 text-3xl flex-shrink-0" />
            <span className="text-xl font-medium">
              Rourkela, Odisha
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;