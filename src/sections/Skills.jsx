import React from "react";

// ------------------ IMPORT ALL SKILL ICONS ------------------ //
import pythonImg from "../assets/skills/python.png";
import cppImg from "../assets/skills/cpp.png";
import jsImg from "../assets/skills/js.png";
import htmlImg from "../assets/skills/html.png";
import cssImg from "../assets/skills/css.png";
import sqlImg from "../assets/skills/sql.png";
import mongoImg from "../assets/skills/mongo.png";
import tfImg from "../assets/skills/tensorflow.png";
import kerasImg from "../assets/skills/keras.png";
import sklearnImg from "../assets/skills/sklearn.png";
import numpyImg from "../assets/skills/numpy.png";
import pandasImg from "../assets/skills/pandas.png";
import streamlitImg from "../assets/skills/streamlit.jpg";
import jupyterImg from "../assets/skills/jupyter.jpg";
import burpImg from "../assets/skills/burp.jpg";
import wiresharkImg from "../assets/skills/wireshark.png";
import nmapImg from "../assets/skills/nmap.png";
import sqlmapImg from "../assets/skills/sqlmap.png";
import niktoImg from "../assets/skills/nikto.png";
import windowsImg from "../assets/skills/windows.png";
import linuxImg from "../assets/skills/linux.png";


// ------------------ REUSABLE PILL COMPONENT ------------------ //
const Pill = ({ icon, name }) => (
  <div className="flex items-center gap-2 px-4 py-2 bg-[#111827] rounded-xl shadow border border-gray-700">
    <img src={icon} alt={name} className="w-6 h-6" />
    <span className="text-sm">{name}</span>
  </div>
);


// ------------------ REUSABLE SKILL CATEGORY BOX ------------------ //
const SkillBox = ({ title, skills }) => (
  <div
    className="
      bg-[#0f1629] p-6 rounded-2xl shadow-lg
      border border-blue-500
      hover:border-blue-400
      transition-all duration-300
      hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]
    "
  >
    <h3 className="text-2xl font-bold text-center mb-6 text-blue-400">
      {title}
    </h3>

    <div className="flex flex-wrap justify-center gap-4">
      {skills.map((skill, i) => (
        <Pill key={i} icon={skill.icon} name={skill.name} />
      ))}
    </div>
  </div>
);


// ------------------ MAIN SKILLS SECTION ------------------ //
const Skills = () => {
  return (
    <section id="skills" className="py-20 text-white bg-[#050B16]">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-6">Skills & Technologies</h2>
<div className="w-28 h-1 bg-blue-500 mx-auto mb-12"></div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Programming Languages */}
          <SkillBox
            title="Programming Languages"
            skills={[
              { name: "Python", icon: pythonImg },
              { name: "C++", icon: cppImg },
              { name: "JavaScript", icon: jsImg },
              { name: "HTML", icon: htmlImg },
              { name: "CSS", icon: cssImg },
            ]}
          />

          {/* Databases */}
          <SkillBox
            title="Databases"
            skills={[
              { name: "SQL", icon: sqlImg },
              { name: "MongoDB", icon: mongoImg },
            ]}
          />

          {/* Machine Learning */}
          <SkillBox
            title="Machine Learning"
            skills={[
              { name: "TensorFlow", icon: tfImg },
              { name: "Keras", icon: kerasImg },
              { name: "Scikit-learn", icon: sklearnImg },
              { name: "NumPy", icon: numpyImg },
              { name: "Pandas", icon: pandasImg },
              { name: "Streamlit", icon: streamlitImg },
              { name: "Jupyter Notebook", icon: jupyterImg },
            ]}
          />

          {/* Cybersecurity */}
          <SkillBox
            title="Cybersecurity"
            skills={[
              { name: "Burp Suite", icon: burpImg },
              { name: "Wireshark", icon: wiresharkImg },
              { name: "Nmap", icon: nmapImg },
              { name: "SQLMap", icon: sqlmapImg },
              { name: "Nikto", icon: niktoImg },
            ]}
          />

          {/* Operating Systems */}
          <SkillBox
            title="Operating Systems"
            skills={[
              { name: "Windows", icon: windowsImg },
              { name: "Kali Linux", icon: linuxImg },
            ]}
          />

        </div>
      </div>
    </section>
  );
};

export default Skills;
