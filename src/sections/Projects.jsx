import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// ---------------- PROJECT CARD COMPONENT ---------------- //
const ProjectCard = ({
  title,
  subtitle,
  description,
  tags,
  link,
  demoLink,
}) => (
  <div
    className="
      p-6 rounded-xl shadow-lg transition-all duration-300
      bg-[#111827]
      border-2 border-blue-500
      hover:border-blue-400
      hover:shadow-[0_0_18px_rgba(59,130,246,0.55)]
    "
  >
    <h3 className="text-2xl font-semibold text-blue-300">
      {title}
    </h3>

    <p className="text-blue-400 font-medium mt-1">
      {subtitle}
    </p>

    <p className="mt-4 text-gray-300 leading-relaxed">
      {description}
    </p>

    <div className="flex flex-wrap gap-2 mt-4">
      {tags.map((tag, i) => (
        <span
          key={i}
          className="
            px-3 py-1 rounded-md text-sm text-gray-300
            bg-gray-800
            border border-blue-500
            hover:border-blue-400
            transition
          "
        >
          {tag}
        </span>
      ))}
    </div>

    <div className="mt-6 flex gap-4 flex-wrap">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="
          inline-flex items-center gap-2 
          px-5 py-2.5 rounded-lg font-medium
          border border-blue-600
          text-blue-300
          hover:border-blue-400 hover:text-blue-200
          transition-all duration-300
          shadow-[0_0_10px_rgba(59,130,246,0.35)]
          hover:shadow-[0_0_16px_rgba(59,130,246,0.6)]
        "
      >
        <FaGithub className="text-xl" />
        GitHub
      </a>

      {demoLink && (
        <a
          href={demoLink}
          target="_blank"
          rel="noreferrer"
          className="
            inline-flex items-center gap-2 
            px-5 py-2.5 rounded-lg font-medium
            border border-green-500
            text-green-300
            hover:border-green-400 hover:text-green-200
            transition-all duration-300
            shadow-[0_0_12px_rgba(34,197,94,0.45)]
            hover:shadow-[0_0_18px_rgba(34,197,94,0.75)]
          "
        >
          <FaExternalLinkAlt />
          Website
        </a>
      )}
    </div>
  </div>
);

// ---------------- MAIN PROJECT SECTION ---------------- //
const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 max-w-6xl mx-auto text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-6">
        Featured Projects
      </h2>
      <div className="w-28 h-1 bg-blue-500 mx-auto mb-12"></div>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Aegis Forensics */}
        <ProjectCard
          title="Aegis Forensics"
          subtitle="DFIR Triage & File Analysis Tool"
          description="Aegis Forensics is a lightweight Digital Forensics and Incident Response (DFIR) triage tool for rapid analysis of suspicious files (.pdf, .jpg, .png, .exe, .docx, .zip). It supports multi-format inspection and extracts key forensic indicators such as metadata, embedded strings, and structural anomalies, along with intelligent risk classification (Low, Medium, High)."
          tags={[
            "DFIR",
            "Cybersecurity",
            "Forensics",
            "Malware Analysis",
            "Python",
          ]}
          link="https://github.com/DibyanshuSah/aegis-forensics"
        />

        {/* SkillForge-AI */}
        <ProjectCard
          title="SkillForge-AI"
          subtitle="GenAI-Powered Adaptive Learning Platform"
          description="SkillForge-AI is a GenAI-powered adaptive learning platform built on a Retrieval Augmented Generation (RAG) architecture. It enables users to interact with their study material through contextual Q&A, delivering accurate and personalized responses using LLMs and vector-based retrieval."
          tags={[
            "GenAI",
            "RAG",
            "LLM",
            "Phi-3",
            "FAISS",
            "Vector DB",
          ]}
          link="https://github.com/DibyanshuSah/skillforge-AI"
          demoLink="https://huggingface.co/spaces/rishusah/skillforge-ai"
        />

        {/* CVisionAI */}
        <ProjectCard
          title="CVisionAI"
          subtitle="AI-Powered Resume Intelligence Engine"
          description="CVisionAI is an AI-powered resume screening system that extracts structured data from PDF resumes and classifies candidates into relevant job roles using machine learning, enabling faster and more efficient candidate shortlisting."
          tags={[
            "Python",
            "TF-IDF",
            "KNN",
            "Streamlit",
          ]}
          link="https://github.com/DibyanshuSah/Resume-Screening-With-Python"
          demoLink="https://resume-screening-with-python-kauwqmhgxqbraz6o3bphzz.streamlit.app/"
        />

        {/* StyleSense */}
        <ProjectCard
          title="StyleSense"
          subtitle="AI-Based Fashion Recommendation System"
          description="StyleSense is a deep learning–based fashion recommendation system that uses ResNet50 for feature extraction and similarity matching to identify visually similar clothing items, delivering fast and accurate recommendations through a streamlined interface."
          tags={[
            "TensorFlow",
            "ResNet50",
            "Deep Learning",
            "Streamlit",
          ]}
          link="https://github.com/DibyanshuSah/Fashion-Recommendation-System"
          demoLink="https://huggingface.co/spaces/rishusah/fashion-recommender"
        />
      </div>
    </section>
  );
};

export default Projects;