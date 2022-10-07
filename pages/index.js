import Head from 'next/head';
import { BsFillMoonStarsFill } from "react-icons/bs";
import {AiFillTwitterCircle, AiFillLinkedin} from "react-icons/ai";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Micah Graf Portfolio</title>
        <meta name="description" content="Developer portfolio of Micah Graf" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white p-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-gemunu font-bold">Micah Graf - Full Stack Dev</h1>
            <ul className="flex items-center">
              <li><BsFillMoonStarsFill className="cursor-pointer text-2xl"/></li>
              <li><a href="#" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8">Resume</a></li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py2 text-teal-500 font-medium">
              Micah Graf
            </h2>
            <h3 className="text-2xl py2">
              Software Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              A software engineer who loves solving tough problems, building useful applications, and learning new skills.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
          </div>
          <div>
            GET IMAGE
          </div>
        </section>
      </main>
    </div>
  )
}
