import ProjectCard from "../components/project-card/project-card.component";
import { projects } from "../data/project.data";
import Head from "next/head";

const Projects = () => {
  return (
    <div>
      <Head>
        <title>Charan | Projects</title>
        <script src="//cdn.jsdelivr.net/github-cards/latest/widget.js"></script>
      </Head>
      <div className="flex justify-center mb-12 h-40">
      <div
        className="github-card"
        data-github="charan1973"
        data-width="400"
        data-height="150"
        data-theme="default"
      />
      </div>
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
