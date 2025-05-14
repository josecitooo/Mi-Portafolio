
import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

const socialMediaLinks = [
  {
    name: 'LinkedIn',
    icon: <Linkedin className="w-5 h-5" />,
    url: 'https://www.linkedin.com/in/josefernandezopen',
  },
  {
    name: 'GitHub',
    icon: <Github className="w-5 h-5" />,
    url: 'https://github.com/josecitooo',
  },
  {
    name: 'Instagram',
    icon: <Instagram className="w-5 h-5" />,
    url: 'https://www.instagram.com/josecaarlos._/',
  },
];


const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      <a
        href="https://github.com/josecitooo"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
      >
        <Github className="w-6 h-6" />
      </a>
      <a
        href="https://www.linkedin.com/in/josefernandezopen"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
      >
        <Linkedin className="w-6 h-6" />
      </a>
      <a
        href="https://www.instagram.com/josecaarlos._/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
      >
        <Instagram className="w-6 h-6" />
      </a>
    </div>
  );
};

export default SocialLinks;