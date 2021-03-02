import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({
  name,
  description,
  imageUrl,
  projectUrl,
  githubUrl,
}) => {
  return (
    <div className="h-56 w-full border flex items-center py-4 lg:px-20 justify-around">
      <img src={imageUrl} className="mx-2 w-2/5 lg:w-1/3 h-full rounded border" />
      <div className="flex flex-col justify-around h-full">
        <h4 className="font-bold text-lg">{name}</h4>
        <p className="text-sm font-medium max-w-md">{description}</p>
        <div className="flex flex-col lg:flex-row">
          <Link href={projectUrl}>
            <a
              target="_blank"
              className="p-2 lg:p-5 lg:mr-2 border hover:bg-black hover:text-white"
            >
              Project URL &#8594;
            </a>
          </Link>
          <Link href={githubUrl}>
            <a
              target="_blank"
              className="p-2 lg:p-5 border hover:bg-black hover:text-white"
            >
              Github URL &#8594;
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
