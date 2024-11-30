import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white text-center py-4 fixed bottom-0 w-full">
      <p>
        Made by Mehmil Zeeshan <span className="text-xl">✨</span> | &copy; {year} |
        <a href="mailto:mehmilzeeshan125@gmail.com" className="text-white hover:text-gray-300 ml-2">
          Contact Me
        </a>
      </p>
    </footer>
  );
}

export default Footer;

