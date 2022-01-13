import Head from "next/head"
import Link from "next/link";
import { useState } from "react";
import { experience as experienceList } from "../data/experience.data";


const Experience = () => {
  return (
    <>
    <Head>
        <title>Charan | Experience</title>
    </Head>
    <div>
        <h2 className="font-bold text-center text-xl mb-4">Experience</h2>
        <div className="flex flex-col">
            {
                experienceList.map(experience => {
                    return (
                        <div className="border p-10 mb-10" key={experience.id}>
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
                            <ul className="list-disc mt-2" style={{ paddingLeft: "40px" }}>
                                {
                                    experience.summary.map((item, idx) => {
                                        if (Array.isArray(experience.summary[idx + 1])) {
                                            return (
                                            <li key={item}>
                                                {item}
                                                <ul className="list-disc" style={{ paddingLeft: "40px" }}>
                                                    {experience.summary[idx + 1].map(nestedItem => <li key={nestedItem}>{nestedItem}</li>)}
                                                </ul>
                                            </li>)
                                        }
                                        if (Array.isArray(item)) {
                                            return
                                        }
                                        return <li key={item}>{item}</li>
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
