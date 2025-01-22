const ProjectCard = ({project}) => {
    return (
        <div className="bg-gray-800 text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
          {/* Card Header */}
          <div className="bg-yellow-500 py-2 px-4">
            <h3 className="text-lg font-semibold">{project.title}</h3>
          </div>
    
          {/* Card Content */}
          <div className="p-4">
            <p className="text-stone-300 mb-4">{project.description}</p>
    
            {/* Technologies */}
            <div className="mb-4">
              <h4 className="text-sm text-yellow-500 font-semibold mb-1">Technologies:</h4>
              <ul className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <li
                    key={index}
                    className="text-xs bg-gray-700 py-1 px-2 rounded-full"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
    
            {/* View Project Button */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-500 text-black font-medium py-2 px-4 rounded-md hover:bg-yellow-400 transition-colors"
              >
                View Project
              </a>
            )}
          </div>
        </div>
      );
};

export default ProjectCard;