import ProjectCard from "../components/project-card/project-card.component";
import { projects } from "../data/project.data";
import Head from "next/head";
import { bio } from "../data/home.data";

const Projects = () => {
  return (
    <div>
      <Head>
        <title>{bio.name.first} | Projects</title>
        <script src="//cdn.jsdelivr.net/github-cards/latest/widget.js"></script>
      </Head>
      {
        bio.socialLinks &&  bio.socialLinks.github && (
          <div className="flex justify-center mb-12 h-40">
            <div
              className="github-card"
              data-github={bio.socialLinks.github.split("github.com/")[1].split("/")[0]}
              data-width="400"
              data-height="150"
              data-theme="default"
            />
          </div>
        )
      }
      {
        projects && projects.length > 0 ? (
          <>
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
          </>
        ) : <>No projects</>
      }
    </div>
  );
};

export default Projects;
