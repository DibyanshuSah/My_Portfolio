import React from "react";
import { FaGithub } from "react-icons/fa";

// ---------------- PROJECT CARD COMPONENT ---------------- //
const ProjectCard = ({ title, subtitle, description, tags, link }) => (
  <div
    className="
      bg-[#111827] p-6 rounded-xl shadow-lg
      border border-blue-500
      hover:border-blue-400
      transition-all duration-300
      hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]
    "
  >
    {/* Title */}
    <h3 className="text-2xl font-semibold text-blue-300">{title}</h3>
    <p className="text-blue-400 font-medium mt-1">{subtitle}</p>

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
            px-3 py-1 bg-gray-800 rounded-md text-sm text-gray-300
            border border-blue-500
            hover:border-blue-400
            transition
          "
        >
          {tag}
        </span>
      ))}
    </div>

    {/* GitHub Button */}
    <a
      href={link}
      target="_blank"
      className="
        mt-5 inline-flex items-center gap-2 
        px-5 py-2.5 rounded-lg font-medium
        border border-gray-600
        text-gray-200
        hover:border-blue-400 hover:text-blue-300
        transition-all duration-300
        shadow-[0_0_10px_rgba(0,0,0,0.4)]
        hover:shadow-[0_0_15px_rgba(29,78,216,0.6)]
      "
    >
      <FaGithub className="text-xl" />
      View on GitHub
    </a>
  </div>
);


// ---------------- MAIN PROJECT SECTION ---------------- //
const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto text-white">
      
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-6">Featured Projects</h2>
      <div className="w-28 h-1 bg-blue-500 mx-auto mb-12"></div>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* CVisionAI */}
        <ProjectCard
          title="CVisionAI"
          subtitle="Resume Classification System"
          description="CVisionAI automatically reads PDF resumes, extracts text, and classifies candidates into job categories using ML models. It helps automate the screening process and reduces manual effort for recruiters."
          tags={[
            "Python",
            "TF-IDF",
            "KNN",
            "PyPDF2",
            "Streamlit",
            "Scikit-learn",
          ]}
          link="https://github.com/DibyanshuSah/Resume-Screening-With-Python"
        />

        {/* StyleSense */}
        <ProjectCard
          title="StyleSense"
          subtitle="AI-Based Fashion Recommendation System"
          description="StyleSense analyzes outfit images using ResNet50 deep feature extraction and provides visually accurate clothing recommendations. It helps users discover similar fashion styles with a smooth and interactive UI."
          tags={[
            "Python",
            "TensorFlow",
            "ResNet50",
            "Streamlit",
            "Deep Learning",
          ]}
          link="https://github.com/DibyanshuSah/Fashion-Recommendation-System"
        />

        {/* Insurance Eligibility Model */}
        <ProjectCard
          title="Insurance Eligibility Prediction"
          subtitle="Machine Learning Classification Model"
          description="A predictive system that determines insurance eligibility based on customer attributes. It uses multiple ML models like Logistic Regression, Random Forest, and SVM, offering data-driven decision support."
          tags={[
            "Python",
            "Pandas",
            "NumPy",
            "Scikit-learn",
            "Matplotlib",
          ]}
          link="https://github.com/DibyanshuSah/Insurance-Eligibility-Prediction-Model"
        />

        {/* NEW PROJECT → Invoice QC Service */}
        <ProjectCard
          title="Invoice QC Service"
          subtitle="Automated Invoice Quality Control API"
          description="A FastAPI-powered microservice that validates invoices by performing automated quality checks. It detects missing fields, incorrect formats, mismatches, and structural errors in both JSON and PDF-based invoice data. Ideal for backend automation in enterprise finance workflows."
          tags={[
            "FastAPI",
            "Python",
            "REST API",
            "JSON Validation",
            "Data Quality",
            "Automation"
          ]}
          link="https://github.com/DibyanshuSah/invoice-qc-service"
        />

      </div>
    </section>
  );
};

export default Projects;
