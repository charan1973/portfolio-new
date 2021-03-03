import Link from "next/link";
import Head from "next/head"
import { resources } from "../data/resources.data";

const Resources = () => {
  return (
    <>
    <Head>
      <title>Charan | Resources</title>
    </Head>
    <div>
    <h2 className="font-bold text-xl text-center">Resources</h2>
      <ul className="leading-10">
        {resources.map((resource) => (
          <li key={resource.name} className="list-disc mb-5 lg:mb-0">
            <Link href={resource.link}>
              <a target="_blank" className="no-underline hover:underline">{resource.name} - <b>{resource.type}</b></a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default Resources;
