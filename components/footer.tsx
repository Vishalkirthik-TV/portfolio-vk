"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

import { MagicButton } from "@/components/ui/magic-button";
import { socialMedia } from "@/data";

export const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const serviceId = "service_u5kpf8a";
    const templateId = "template_ma9q9ml";
    const publicKey = "ZoczoxkteCk4-pAqv";
  
    setIsLoading(true); // Show loading state
  
    try {
      await emailjs.send(serviceId, templateId, formData, publicKey);
  
      setSuccessMessage("✅ Message sent successfully!"); // Show success message
  
      // Reset form
      setFormData({ name: "", email: "", message: "" });
  
      // Hide success message & close modal after 3 seconds
      setTimeout(() => {
        setSuccessMessage("");
        setIsModalOpen(false);
      }, 3000);
    } catch (error) {
      console.error("Error sending email:", error);
      setErrorMessage("❌ Failed to send message. Please try again.");
      
      // Hide error message after 3 seconds
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    } finally {
      setIsLoading(false); // Hide loading state
    }
  };
  

  return (
    <footer id="contact" className="mb-[100px] w-full pb-10 md:mb-auto">
      <div className="absolute -bottom-72 left-0 min-h-96 w-full">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="h-full w-full opacity-50"
          width={1260}
          height={863}
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>

        <p className="my-5 text-center text-white-200 md:mt-10">
          Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
        </p>

        {/* Open Contact Modal */}
        <span onClick={() => setIsModalOpen(true)} className="md:mt-10">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
            asChild
          />
        </span>
      </div>

      {isModalOpen && (
  <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#000319]/80 backdrop-blur-md">
    <div className="bg-white/10 p-8 rounded-2xl shadow-xl w-96 border border-white/20 backdrop-blur-lg text-white relative">
      <h2 className="text-3xl font-bold mb-5 text-center text-white">Get in Touch</h2>

      {successMessage && (
        <div className="absolute top-[-60px] left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-5 py-3 rounded-lg shadow-lg animate-fade-in">
          ✅ Message Sent Successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          type="text"
          placeholder="Your Name"
          className="border border-white/30 p-4 rounded-lg bg-transparent text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          className="border border-white/30 p-4 rounded-lg bg-transparent text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />

        <textarea
          placeholder="Your Message"
          className="border border-white/30 p-4 rounded-lg bg-transparent text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
        />

        <button
          type="submit"
          className="border-2 border-purple-500 bg-gradient-to-r from-[#6a11cb] to-[#eecbfa] text-white p-4 rounded-lg font-semibold hover:scale-105 hover:border-white transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-500/50"
        >
          Send Message
        </button>
      </form>

      <button
        type="button"
        onClick={() => setIsModalOpen(false)}
        className="absolute top-3 right-4 text-white text-xl font-medium hover:text-red-400 transition"
      >
        ✖
      </button>
    </div>
  </div>
)}


      {/* Footer Content */}
      <div className="relative z-[999] mt-16 flex flex-col items-center justify-between md:flex-row">
        <p className="text-sm font-light md:text-base md:font-normal">
          Copyright &copy; {new Date().getFullYear()}{" "}
          <Link
            href="#"
            target="_blank"
            rel="noreferrer noopener"
            className="text-purple"
          >
            Vishalkirthik
          </Link>{" "}
        </p>

        <div className="flex items-center gap-6 md:gap-3">
          {socialMedia.map((profile) => (
            <Link
              key={profile.name}
              href={profile.link}
              target="_blank"
              rel="noreferrer noopener"
              className="saturate-180 flex size-10 items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 backdrop-blur-lg backdrop-filter"
              title={profile.name}
            >
              <Image
                src={profile.img}
                alt={`profile-${profile.name}`}
                width={20}
                height={20}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
