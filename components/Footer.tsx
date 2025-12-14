"use client";

import { Github, Linkedin, Mail, ExternalLink, Instagram, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/SagarJangra530", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sagarjangra/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/_sagarjangra/", label: "Instagram" },
    { icon: Mail, href: "mailto:sagarjangra1496@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">BuildNest</h3>
            <p className="text-gray-400 mb-2">
              Complete Web & App Solutions
            </p>
            <p className="text-gray-500 text-sm mb-4">
              by Sagar Jangra
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <Phone className="w-4 h-4" />
              <a
                href="https://wa.me/918168919034"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition-colors"
              >
                +91 8168919034
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-400 mt-2">
              <Mail className="w-4 h-4" />
              <a
                href="mailto:sagarjangra1496@gmail.com"
                className="hover:text-primary-400 transition-colors text-sm"
              >
                sagarjangra1496@gmail.com
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-primary-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-primary-400 transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-800 hover:bg-primary-600 transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} BuildNest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

