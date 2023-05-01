import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { skills, courses, bio } from "../data/home.data";

const SkillBox = ({ icon, name }) => (
  <div className="border flex flex-col lg:flex-row justify-center items-center p-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black cursor-default">
    <span className="text-md mr-1">{icon}</span>
    <span className="text-sm lg:text-md">{name}</span>
  </div>
);

const CourseBox = ({ courseName, courseLink, certificateLink }) => (
  <div className="border py-4 px-3 relative h-44 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
    <Link href={courseLink}>
      <a target="_blank" className="text-sm block hover:underline">
        {courseName}
      </a>
    </Link>
    {certificateLink && (
      <Link href={certificateLink}>
        <a
          target="_blank"
          className="absolute bottom-3 font-semibold hover:underline"
        >
          certificate &#8594;
        </a>
      </Link>
    )}
  </div>
);

export default function Home() {
  return (
    <>
      <Head>
        <title>{bio.name.first} | Home</title>
        <meta
          name="description"
          content={`${bio.name.first + " " + bio.name.last}'s Portfolio website. ${bio.aboutMe}`}
        />
      </Head>
      <div className="px-2 lg:px-32">
        <div className="flex flex-col items-center justify-center">
          <img
            src="/images/propic.jpeg"
            width="100px"
            height="100px"
            className="rounded-full"
          />
          <h2 className="font-bold text-2xl mt-2">I'm {bio.name.first}👋</h2>
        </div>
        <div className="mt-4 lg:px-16">
          <p
            lang="en"
            className="text-lg leading-10 break-word"
            style={{ hyphens: "auto" }}
          >
           {bio.aboutMe}
          </p>
        </div>
        {
          skills && skills.length > 0 && (
            <div>
              <h3 className="font-bold text-2xl mt-4 text-center mb-6 underline">
                Skills
              </h3>
              <div className="grid grid-cols-3 lg:grid-cols-5 gap-3">
                {skills.map((skill) => (
                  <SkillBox key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          )
        }
        {/* {
          courses && courses.length > 0 && (
            <div>
              <h3 className="font-bold text-2xl mt-4 text-center mb-6 underline">
                Courses
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {courses.map((course) => (
                  <CourseBox key={course.courseName} {...course} />
                ))}
              </div>
            </div>
          )
        } */}
      </div>
    </>
  );
}
