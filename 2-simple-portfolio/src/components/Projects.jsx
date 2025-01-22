import ProjectCard from "./ProjectCard";

const Projects = ({projects}) => {
    return(
        <div id="projects" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6 mx-6">
            {projects.map((project) => (
                <div key={project.title}>
                    <ProjectCard project={project}/>
                </div>
            ))}
        </div>
    );
}

export default Projects;