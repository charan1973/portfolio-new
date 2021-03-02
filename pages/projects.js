import ProjectCard from "../components/project-card/project-card.component";
import { projects } from "../data/project.data";

const Projects = () => {
  return (
    <div>
      <h2 className="font-bold text-2xl mb-5 text-center">Projects</h2>
      {projects.map((project) => (
        <div className="mb-4" key={project.githubUrl}>
        <ProjectCard
          name={project.projectName}
          description={project.projectDescription}
          imageUrl={project.imageUrl}
          projectUrl={project.projectUrl}
          githubUrl={project.githubUrl}
        />
        </div>
      ))}
    </div>
  );
};

export default Projects;
