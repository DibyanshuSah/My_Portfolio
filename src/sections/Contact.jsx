import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const formData = new FormData(e.target);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      setResult("Your message has been sent successfully!");
      e.target.reset();
    } else {
      setResult("Something went wrong. Please try again!");
    }
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-5xl mx-auto text-white">
      <h2 className="text-4xl font-bold text-center mb-6">Let's Connect</h2>
      <div className="w-28 h-1 bg-blue-500 mx-auto mb-12"></div>

      {/* SOCIAL LINKS */}
      <div className="flex flex-wrap justify-center gap-10 text-lg mb-10">
        
        <a
          href="mailto:dibyanshusah0@gmail.com"
          className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition"
        >
          <FaEnvelope className="text-blue-400 text-2xl" /> dibyanshusah0@gmail.com
        </a>

        <a
          href="https://www.linkedin.com/in/dibyanshu-sah/"
          target="_blank"
          className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition"
        >
          <FaLinkedin className="text-blue-400 text-2xl" /> LinkedIn
        </a>

        <a
          href="https://github.com/DibyanshuSah"
          target="_blank"
          className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition"
        >
          <FaGithub className="text-blue-400 text-2xl" /> GitHub
        </a>

        <a
          href="https://www.instagram.com/dibyanshusah/"
          target="_blank"
          className="flex items-center gap-2 text-gray-300 hover:text-pink-400 transition"
        >
          <FaInstagram className="text-pink-400 text-2xl" /> Instagram
        </a>
      </div>

      {/* CONTACT FORM */}
      <form
        onSubmit={onSubmit}
        className="bg-[#111827] p-8 rounded-xl border border-gray-700 shadow-xl max-w-3xl mx-auto"
      >
        {/* ACCESS KEY */}
        <input
          type="hidden"
          name="access_key"
          value="2768ac59-3a25-46f4-acfd-548382421b3f"
        />

        {/* NAME */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full bg-[#0f1629] p-3 rounded-lg border border-gray-700 text-white mb-4"
        />

        {/* EMAIL */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full bg-[#0f1629] p-3 rounded-lg border border-gray-700 text-white mb-4"
        />

        {/* MESSAGE */}
        <textarea
          name="message"
          placeholder="Your Message..."
          required
          className="w-full bg-[#0f1629] p-3 rounded-lg border border-gray-700 text-white h-32 mb-6"
        ></textarea>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg transition"
        >
          Send Message
        </button>

        {/* STATUS MESSAGE */}
        {result && (
          <p className="text-center text-gray-300 mt-4">{result}</p>
        )}
      </form>
    </section>
  );
};

export default Contact;
