const Header = ({ data }) => {
  return (
    <>
      {/* Header Section */}
      <nav className="bg-gray-800 py-4 px-6">
        <ul className="text-white font-semibold flex justify-between items-center">
          {/* Title */}
          <li className="text-xl">{data.title}</li>
          
          {/* Navigation Links */}
          <div className="flex space-x-8">
            <li className="hover:text-yellow-500 cursor-pointer hover:shadow-lg transition-all">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-yellow-500 cursor-pointer hover:shadow-lg transition-all">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-yellow-500 cursor-pointer hover:shadow-lg transition-all">
              <a href="#footer">Contact</a>
            </li>
          </div>
        </ul>
      </nav>

      {/* Main Content Section */}
      <div className="flex flex-col items-center justify-center bg-gray-900 text-center px-6"
      style={{ height: `calc(100vh - 64px)` }}>
        <h1 className="text-white text-4xl font-bold mb-4 -mt-6">
          Hi! I am
          <span className="text-yellow-500"> {data.name}!</span>
        </h1>
        <p className="text-stone-400 text-lg max-w-2xl">
          {data.shortDescription}
        </p>
      </div>
    </>
  );
};

export default Header;
