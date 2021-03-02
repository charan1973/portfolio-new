import Image from "next/image";
import Head from "next/head"

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
        <h2 className="font-bold text-lg text-2xl mt-2">I'm Charan👋</h2>
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
    </div>
    </>
  );
}
