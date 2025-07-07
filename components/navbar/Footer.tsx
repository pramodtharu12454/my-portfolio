"use client";
import React from "react";
import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Github,
  Linkedin,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Pramod Tharu</h3>
          <p className="flex items-center space-x-2">
            <Mail size={18} />
            <span>tharupramod406@gmail.com</span>
          </p>
          <p className="flex items-center space-x-2">
            <Phone size={18} />
            <span>+977 9815442325</span>
          </p>
          <p>Samjhauta Marg, Kathmandu, Nepal</p>
        </div>

        {/* Social Media */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Follow Me</h3>
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/parmod.tharu.507"
              target="_blank"
              aria-label="Facebook"
            >
              <Facebook className="hover:text-blue-500" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              aria-label="Instagram"
            >
              <Instagram className="hover:text-pink-500" />
            </a>
            <a
              href="https://wa.me/9779815442325"
              target="_blank"
              aria-label="WhatsApp"
            ></a>
            <a
              href="https://github.com/pramodtharu12454"
              target="_blank"
              aria-label="GitHub"
            >
              <Github className="hover:text-gray-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/pramod-tharu-6877a4273/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <Linkedin className="hover:text-blue-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© {new Date().getFullYear()} Pramod Tharu. All rights reserved.</p>
        <a
          href="#top"
          className="mt-2 md:mt-0 hover:text-blue-500 flex items-center"
        >
          <ArrowUp size={16} className="mr-1" />
          Back to Top
        </a>
      </div>
    </footer>
  );
};

export default Footer;
