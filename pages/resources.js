import Link from "next/link";
import { resources } from "../data/resources.data";

const Resources = () => {
  return (
    <div>
    <h2 className="font-bold text-xl text-center">Resources</h2>
      <ul className="leading-10">
        {resources.map((resource) => (
          <li className="list-disc">
            <Link href={resource.link}>
              <a target="_blank" className="underline hover:no-underline">{resource.name} - <b>{resource.type}</b></a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resources;
