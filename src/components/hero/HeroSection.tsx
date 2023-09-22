import React from 'react'
import Contactlink from "../contact/Contactlink";
import Image from "next/image";


const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-center gap-6 md:flex-row md:items-start md:mb-40 lg:mb-24 my-10">
        <div className="md:w-1/2 md:ml-20 md:mr-4 p-4">
          <h1 className="text-5xl text-gradient-gray font-extrabold">
            Jiacinto Branducci 
          </h1>
          <h2 className="mt-5 text-4xl text-gradient-gray font-extrabold">
            let me bring your ideas to life
          </h2>
          <p className="max-w-lg md:text-xl text-l text-gradient-gray py-4 text-justify">
            <b> Developer with a special affinity for back-end</b> I&apos;m a
            former art teacher who decided to change careers and fully commit to
            development. My creative spirit, curiosity, and determination make
            me a valuable asset in the IT field. I tackle challenges head-on and
            don&apos;t back down from problems. My thirst for learning and
            exploration makes me open and eager to discover new technologies or
            languages with enthusiasm and motivation.
          </p>
          <div className="flex-row justify-center">
            <p className="md:text-xl text-l text-gradient-gray py-2">
              Feel free to contact me:
            </p>
            <Contactlink />
          </div>
        </div>
        <div className="md:w-1/2 p-5 md:ml-20">
          <Image
            width={400}
            height={400}
            src="/images/me2.png"
            alt="me"
            className="rounded-lg shadow-lg opacity-75 hover:opacity-90"
          />
        </div>
      </div>
  )
}

export default HeroSection