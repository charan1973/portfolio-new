import Link from "next/link";

const LinkButton = ({ url, children }) => (
  <Link href={url}>
    <a
      target="_blank"
      className="p-2 lg:p-5 border border-gray-500 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
    >
      {children} &#8594;
    </a>
  </Link>
);

const ProjectCard = ({
  name,
  description,
  imageUrl,
  projectUrl,
  githubUrl,
}) => {
  return (
    <div className="h-60 w-full border flex items-center py-4 lg:px-20 justify-around">
      <img
        src={imageUrl}
        className="mx-2 w-2/5 lg:w-1/3 h-3/4 lg:h-full rounded border"
      />
      <div className="flex flex-col justify-around h-full">
        <h4 className="font-bold text-lg">{name}</h4>
        <p className="text-sm font-medium max-w-md">
          {description.slice(0, 112) + (description.length > 112 ? "..." : "")}
        </p>
        <div className="flex flex-col lg:flex-row">
          {projectUrl && <LinkButton url={projectUrl}>Project URL</LinkButton>}
          <LinkButton url={githubUrl}>Github URL</LinkButton>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
