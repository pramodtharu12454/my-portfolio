"use client";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "your_service_id", // Replace
        "your_template_id", // Replace
        formRef.current,
        "your_public_key" // Replace
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          formRef.current?.reset();
        },
        (error) => {
          console.error(error);
          setStatus("Failed to send message. Try again.");
        }
      );
  };

  return (
    <section id="contact" className="pt-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-white-800 mb-10">
        Contact Me
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Left: Map + Address */}
        <div className="space-y-4">
          <iframe
            src="https://www.google.com/maps?q=Samjhauta+Marg,+Kathmandu&output=embed"
            width="100%"
            height="300"
            loading="lazy"
            className="rounded-md shadow"
          ></iframe>
          <p className="text-lg text-white-700">
            📍 Samjhauta Marg, Kathmandu, Nepal
          </p>
        </div>

        {/* Right: Contact Form */}
        <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="text"
            name="address"
            placeholder="Your Address"
            required
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact Number"
            required
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full border px-4 py-2 rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-red-700 transition"
          >
            Submit
          </button>
          {status && <p className="text-sm text-green-600">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
