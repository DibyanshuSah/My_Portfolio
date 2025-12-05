import React from "react";
import { FaAward } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const achievements = [
  {
    title: "Infosys AI Certification",
    description:
      "Gained a solid understanding of core Artificial Intelligence concepts, including ML fundamentals and real-world industry applications.",
    link: "https://drive.google.com/file/d/1ZN56VorSKBYtrHizPT3aSFbpYTtMIkJK/view?usp=sharing",
  },
  {
    title: "Infosys NLP Certification",
    description:
      "Learned essential NLP techniques for processing and interpreting human language, including sentiment analysis and text preprocessing.",
    link: "https://drive.google.com/file/d/1A48MXwJ-Zcbm6MGmcZw1068H74P1gugW/view?usp=sharing",
  },
  {
    title: "LeetCode",
    description:
      "Rating: 1509 | 300+ DSA Problems Solved | Active competitive programmer",
    link: "https://leetcode.com/u/Rishu_05/",
  },
  {
    title: "CodeChef",
    description:
      "Peak Rating: 1224 | 450+ Problems Solved | Active competitive programmer",
    link: "https://www.codechef.com/users/rishu2202",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-6 max-w-6xl mx-auto text-white">

      {/* Heading */}
      <h2 className="text-4xl font-bold text-center">
        Achievements & Certifications
      </h2>

      {/* Blue Underline (Centered) */}
      <div className="w-32 h-1 bg-blue-500 mx-auto mt-2 mb-12 rounded-full"></div>

      <div className="grid md:grid-cols-2 gap-8">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="
              bg-[#111827] p-6 rounded-xl 
              border border-blue-500 
              hover:border-blue-400 
              hover:shadow-[0_0_15px_rgba(29,78,216,0.4)]
              transition-all duration-300
            "
          >
            <div className="flex items-center gap-3 mb-3">
              <FaAward className="text-blue-400 text-2xl" />
              <h3 className="text-xl font-semibold text-blue-300">{item.title}</h3>
            </div>

            <p className="text-gray-300 mb-4">{item.description}</p>

            <a
              href={item.link}
              target="_blank"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
            >
              {item.title === "LeetCode" || item.title === "CodeChef"
                ? "View Profile"
                : "View Certificate"}
              <FaExternalLinkAlt />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
