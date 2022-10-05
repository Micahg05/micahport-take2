import Head from 'next/head';
import { BsFillBasket3Fill } from "react-icons/bs";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Micah Graf Portfolio</title>
        <meta name="description" content="Developer portfolio of Micah Graf" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-gemunu font-bold">Micah Graf - Full Stack Dev</h1>
            <ul className="flex items-center">
              <li><BsFillBasket3Fill className="cursor-pointer text-2xl"/></li>
              <li><a href="#" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8">Resume</a></li>
            </ul>
          </nav>
        </section>
      </main>
    </div>
  )
}
