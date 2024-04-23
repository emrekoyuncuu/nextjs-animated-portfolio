"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      {/* GENERAL CONTAINER */}
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="https://emrekoyuncuu.github.io/nextjs-animated-portfolio/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">Emre Koyuncu - Computer Engineer</h1>
          {/* DESC */}
          <p className="md:text-xl">
            Emre Koyuncu has worked with Java as a junior level software engineer since his university years. He
            lived for 8 months in Ireland, whose native language is English, and received language training because he
            felt his English insufficient. While he was working front-end with android, he realized his interest in design.
            He decided that he could use this curiosity more efficiently with React. Currently developing Full Stack
            applications.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <Link href="/portfolio">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View My Work</button>
            </Link>
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-black">Contact Me</button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )

};

export default Homepage;
