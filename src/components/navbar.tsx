// Navbar.tsx
import React from "react";

interface NavLink {
  title: string;
  href: string;
}

interface NavbarProps {
  brandName?: string;
}

const Navbar: React.FC<NavbarProps> = ({ brandName = "TixSnap" }) => {
  const navLinks: NavLink[] = [
    { title: "Schedule", href: "/schedule" },
    { title: "Organizer", href: "/organizer" },
    { title: "Ticket", href: "/ticket" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-purple-600 shadow-sm">
      <div className="max-w-7xl mx-purple 5x-4 pr-3 pl-6">
        <div className="flex justify-between h-16">
          {/* TixSnap Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-3xl font-bold text-white">{brandName}</span>
            </a>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="text-white transition-transform: duration-200 hover:scale-125"
              >
                {link.title}
              </a>
            ))}
            <button className="border-2 border-white text-white px-4 py-1 rounded-3xl hover:bg-blue-600 hover:text-white transition-transform: duration-200 hover:scale-110">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
