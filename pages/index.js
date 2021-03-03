import Image from "next/image";
import Head from "next/head";
import { skills } from "../data/home.data";

const SkillBox = ({ icon, name }) => (
  <div className="border flex flex-col lg:flex-row justify-center items-center p-2 hover:bg-black hover:text-white cursor-pointer">
    <span className="text-md mr-1">{icon}</span>
    <span className="text-sm lg:text-md">{name}</span>
  </div>
);

export default function Home() {
  return (
    <>
      <Head>
        <title>Charan | Home</title>
      </Head>
      <div className="px-2 lg:px-32">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/images/propic.jpeg"
            width="100px"
            height="100px"
            className="rounded-full"
          />
          <h2 className="font-bold text-2xl mt-2">I'm Charan👋</h2>
        </div>
        <div className="mt-4 lg:px-16">
          <p
            lang="en"
            className="text-lg"
            style={{ lineHeight: 2.8, wordBreak: "break-all", hyphens: "auto" }}
          >
            Hello, I am a <b>Web developer</b>🌍 based on Tamil Nadu, India🇮🇳. I
            am currently pursuing <b>Electronics and Communication</b> Bachelors
            in <b>Sathyabama University, Chennai</b>. I love computers and the
            things it can do. To continue the passion for computers, I started
            learning programming and found my way into web development. I
            currently use <b>javascript</b>❤ as my main language and also I am a
            full stack developer comfortable working with <b>MERN</b>(MongoDB,
            Express, React, Nodejs) stack.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-2xl mt-4 text-center mb-6">Skills</h3>
          <div className="grid grid-cols-3 lg:grid-cols-5 gap-3">
            {skills.map((skill) => (
              <SkillBox key={skill.name} icon={skill.icon} name={skill.name} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
