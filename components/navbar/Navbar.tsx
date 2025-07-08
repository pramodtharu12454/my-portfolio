"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Skill", to: "/skill" },
  { name: "Project", to: "/project" },
  { name: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-600 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={40} height={60} />
          <span className="ml-2 font-bold text-xl">Pramod</span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.to}
                className="cursor-pointer text-gray-700 hover:text-red-500 font-medium"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-blue-400 transition-transform duration-300 ease-in-out z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="font-bold">Menu</span>
          <button onClick={() => setMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <ul className="flex flex-col p-4 space-y-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.to}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer text-gray-700 hover:text-blue-500 font-medium"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
