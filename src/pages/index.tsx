import { type NextPage } from "next";
import Head from "next/head";

import { RouterOutputs, trpc } from "../utils/trpc";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem] text-center">
            Best Mods
            <ModBrowser />
          </h1>
        </div>
      </main>
    </>
  );
};

const mods = [{ name: "Aether" }, { name: "Pixelmon" }];

const ModBrowser: React.FC = () => {
  return (
    <section className="flex w-5/6 mx-auto">
      <ModRow row={mods} />
    </section>
  );
};

const ModRow: React.FC<{ row: typeof mods }> = ({ row }) => {
  return (
    <div className="flex flex-row gap-4 px-4 py-4">
      {row.map((mod) => (
        <div
          key={mod.name}
          className="flex flex-col items-center justify-center gap-4 px-4 py-4"
        >
          {mod.name}
        </div>
      ))}
    </div>
  );
};

export default Home;
