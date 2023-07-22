import Head from "next/head"
import Link from "next/link";
import { experience as experienceList } from "../data/experience.data";
import { bio } from "../data/home.data";

const Experience = () => {
  return (
    <>
    <Head>
        <title>{bio.name.first} | Experience</title>
    </Head>
    <div>
        <h2 className="font-bold text-center text-xl mb-4">Experience</h2>
        <div className="flex flex-col">
            {
                experienceList.map(experience => {
                    return (
                        <div className="border border-gray-300 lg:mb-10 lg:p-10 md:p-5 mb-5 p-3" key={experience.id}>
                            <div className="flex justify-between items-center">
                                <h1 className="text-xl font-bold hover:underline">
                                    <Link href={experience.companyLink}>
                                        <a target="_blank">{experience.companyName}</a>
                                    </Link>
                                </h1>
                                <small className="text-xs">{experience.during}</small>
                            </div>
                            <small className="text-xs">{experience.role}</small>
                            <div className="mt-5">
                                <p><b>Tech Stack:</b> <span>{experience.techStack.map((tech, idx) => {
                                    return experience.techStack.length - 1 === idx ? tech + "." : tech + ", " 
                                })}</span></p>
                            </div>
                            <ul className="list-disc mt-2 pl-5">
                                {
                                    experience.summary.map((item, idx, summary) => {
                                        if (Array.isArray(summary[idx + 1])) {
                                            return (
                                            <li key={item} className="mb-1">
                                                {item}
                                                <ul className="list-disc pl-5">
                                                    {summary[idx + 1].map(nestedItem => <li key={nestedItem}>{nestedItem}</li>)}
                                                </ul>
                                            </li>)
                                        }
                                        if (Array.isArray(item)) {
                                            return
                                        }
                                        return <li key={item} className="mb-2">{item}</li>
                                    })
                                }
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    </div>
    </>
  );
};

export default Experience;
