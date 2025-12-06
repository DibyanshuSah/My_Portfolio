import React from "react";
import profile from "../assets/Profile/Profile_Photo_new.png";

const About = () => {
  return (
    <section 
      id="about" 
      className="py-20 px-6 max-w-5xl mx-auto text-white"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-3">About Me</h2>
      <div className="w-24 h-1 bg-blue-500 mx-auto mb-8 rounded-full"></div>

      <div 
        className="
          flex flex-col md:flex-row 
          items-center md:items-start 
          gap-10
        "
      >
        {/* Profile Image */}
        <img 
          src={profile} 
          className="
            w-52 h-52 md:w-56 md:h-56 
            rounded-full object-cover 
            border-4 border-green-500 
            shadow-[0_0_25px_#00ff00]
          "
          alt="Profile"
        />

        {/* ABOUT TEXT */}
        <div className="space-y-4 text-lg text-gray-300 leading-relaxed md:text-left text-center">

          <p>
            I’m an aspiring <strong className="text-blue-400">AI/ML Engineer</strong> and 
            <strong className="text-blue-400"> Cyber Security Researcher</strong>, currently pursuing 
            my B.Tech at <strong className="text-blue-300">NIT Rourkela</strong>. 
            I’m passionate about building intelligent, scalable, and impactful systems.
          </p>

          <p>
            My expertise spans across  
            <strong className="text-blue-400"> Natural Language Processing</strong>, 
            <strong className="text-blue-400"> Deep Learning</strong>, 
            <strong className="text-blue-400"> Computer Vision</strong>, 
            along with hands-on experience in 
            <strong className="text-blue-400"> Cybersecurity vulnerability assessment </strong> 
            using frameworks like 
            <strong className="text-blue-400"> OWASP</strong>.
          </p>

          <p className="text-gray-400 text-base">
            Outside academics, I enjoy mentoring students, solving DSA problems, 
            and contributing to tech communities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
