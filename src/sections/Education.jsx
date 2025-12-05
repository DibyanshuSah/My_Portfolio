import React from "react";

// Import Education Images
import nitImg from "../assets/education/nitr.png";
import class12Img from "../assets/education/class12.jpg";
import class10Img from "../assets/education/class10.jpg";

const EduCard = ({ title, subtitle, img, status, score, description }) => (
  <div
    className="
      bg-[#0f1629] p-6 rounded-2xl mb-8 flex gap-6
      border border-blue-500
      hover:border-blue-400
      hover:shadow-[0_0_15px_rgba(29,78,216,0.5)]
      transition-all duration-300
    "
  >
    <img
      src={img}
      className="
        w-32 h-32 object-cover rounded-lg 
        border border-blue-500 
        hover:border-blue-400 
        transition
      "
      alt={title}
    />

    <div className="flex flex-col justify-center">
      <h3 className="text-2xl font-bold text-blue-400">{title}</h3>
      <p className="text-gray-300">{subtitle}</p>

      {/* Description Line */}
      <p className="text-gray-400 mt-2 leading-relaxed">
        {description}
      </p>

      <p className="mt-2 text-gray-400">{status}</p>
      <p className="text-blue-300 font-semibold">{score}</p>
    </div>
  </div>
);

const Education = () => {
  return (
    <section id="education" className="py-20 text-white bg-[#050B16]">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">Education</h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-12"></div>

        {/* NIT Rourkela */}
        <EduCard
          title="Bachelor of Technology (B.Tech)"
          subtitle="National Institute of Technology, Rourkela"
          img={nitImg}
          status="2023 – Present"
          score="CGPA: 8.03"
          description="Currently pursuing B.Tech in Food Process Engineering at NIT Rourkela with strong foundations in engineering principles, research and applied technologies."
        />

        {/* Class XII */}
        <EduCard
          title="Higher Secondary (Class XII)"
          subtitle="Kendriya Vidyalaya, Bargarh"
          img={class12Img}
          status="Completed"
          score="Percentage: 93.8%"
          description="Completed Class XII with Computer Science along with PCM, building strong analytical thinking and coding fundamentals."
        />

        {/* Class X */}
        <EduCard
          title="Matriculation (Class X)"
          subtitle="Kendriya Vidyalaya, Bargarh"
          img={class10Img}
          status="Completed"
          score="Percentage: 93.4%"
          description="Completed Class X with outstanding academic performance, ranked among the top-performing students in the school."
        />
      </div>
    </section>
  );
};

export default Education;
