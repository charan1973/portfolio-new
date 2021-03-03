import {tools} from "../data/tools.data"
import Head from "next/head"

const Tools = () => {
  return (
    <>
    <Head>
        <title>Charan | Tools</title>
    </Head>
    <div>
    <h2 className="font-bold text-center text-xl mb-4">Tools</h2>
      {tools.map((tool) => (
        <div key={tool.title} className="mb-8">
          <h3 className="font-semibold">{tool.title}</h3>
          <ul className="list-disc leading-8 lg:leading-10">
            {tool.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    </>
  );
};

export default Tools;
