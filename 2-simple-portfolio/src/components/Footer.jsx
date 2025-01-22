const Footer = ({ links }) => {
    return (
      <div id="footer" className="bg-gray-800 text-white py-6 px-4 mt-12">
        <div className="flex justify-center space-x-8">
          <p className="text-sm">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition-colors"
            >
              Github
            </a>
          </p>
          <p className="text-sm">
            <a
              href={links.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition-colors"
            >
              LinkedIn
            </a>
          </p>
        </div>
        <div className="text-center text-stone-400 mt-4 text-xs">
          <p>&copy; 2025 Mehmet Akif Çevik. All rights reserved.</p>
        </div>
      </div>
    );
  };
  
  export default Footer;
  