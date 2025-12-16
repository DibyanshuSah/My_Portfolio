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
    {/* Title */}
    <h3 className="text-2xl font-semibold text-blue-300">
      {title}
    </h3>

    <p className="text-blue-400 font-medium mt-1">
      {subtitle}
    </p>

    {/* Description */}
    <p className="mt-4 text-gray-300 leading-relaxed">
      {description}
    </p>

    {/* Tags */}
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

    {/* Buttons */}
    <div className="mt-6 flex gap-4 flex-wrap">
      {/* GitHub (BLUE) */}
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

      {/* Website (GREEN GLOW) */}
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
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-6">
        Featured Projects
      </h2>
      <div className="w-28 h-1 bg-blue-500 mx-auto mb-12"></div>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* SkillForge-AI */}
        <ProjectCard
          title="SkillForge-AI"
          subtitle="GenAI-Powered Adaptive Learning Platform"
          description="SkillForge AI is a GenAI-powered adaptive learning platform built using a Retrieval Augmented Generation (RAG) architecture. Users can paste study material or notes as text and ask contextual questions with difficulty-based control and multiple learning modes. The system uses a local Phi-3 Large Language Model (GGUF) combined with FAISS-based vector search to retrieve relevant context before generating responses, ensuring accurate and grounded answers without relying on any paid APIs. The project is fully deployed on Hugging Face Spaces."
          tags={[
            "GenAI",
            "RAG",
            "LLM Inference",
            "Phi-3",
            "FAISS",
            "Vector DB",
            "Hugging Face",
          ]}
          link="https://github.com/DibyanshuSah/skillforge-AI"
          demoLink="https://huggingface.co/spaces/rishusah/skillforge-ai"
        />

        {/* CVisionAI */}
        <ProjectCard
          title="CVisionAI"
          subtitle="AI-Powered Resume Intelligence Engine"
          description="CVisionAI is an automated resume screening system that reads PDF resumes, extracts structured text, and classifies candidates into relevant job categories using machine learning techniques. It leverages TF-IDF feature extraction with KNN-based classification to assist recruiters in quickly shortlisting candidates, reducing manual screening effort while improving consistency and efficiency in the hiring process."
          tags={[
            "Python",
            "TF-IDF",
            "KNN",
            "PyPDF2",
            "Streamlit",
            "Scikit-learn",
          ]}
          link="https://github.com/DibyanshuSah/Resume-Screening-With-Python"
          demoLink="https://resume-screening-with-python-kauwqmhgxqbraz6o3bphzz.streamlit.app/"
        />

        {/* StyleSense */}
        <ProjectCard
          title="StyleSense"
          subtitle="AI-Based Fashion Recommendation System"
          description="StyleSense analyzes outfit images using deep feature extraction with ResNet50 and recommends visually similar clothing items through a content-based similarity approach with an interactive UI."
          tags={[
            "Python",
            "TensorFlow",
            "ResNet50",
            "Streamlit",
            "Deep Learning",
          ]}
          link="https://github.com/DibyanshuSah/Fashion-Recommendation-System"
          demoLink="https://huggingface.co/spaces/rishusah/fashion-recommender"
        />

        {/* Insurance Eligibility */}
        <ProjectCard
          title="Insurance Eligibility Prediction"
          subtitle="Machine Learning Classification Model"
          description="A machine learning–based predictive system that determines customer insurance eligibility using demographic and financial attributes. Multiple models including Logistic Regression, Random Forest, and SVM are evaluated for data-driven decision support."
          tags={[
            "Python",
            "Pandas",
            "NumPy",
            "Scikit-learn",
            "Matplotlib",
          ]}
          link="https://github.com/DibyanshuSah/Insurance-Eligibility-Prediction-Model"
        />

      </div>
    </section>
  );
};

export default Projects;
