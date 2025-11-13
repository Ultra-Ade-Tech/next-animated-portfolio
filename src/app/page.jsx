import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
      
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center p-4 -mt-16 lg:-mt-20">
        <Image
          src="/hero_zayn.png"
          alt="Zayn Portfolio Hero"
          width={700}
          height={700}
          className="object-cover rounded-2xl shadow-sm lg:-mt-20 w-full h-auto max-w-md lg:max-w-lg scale-220"
          priority
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:-mt-20 lg:w-1/2 flex flex-col justify-center items-center space-y-6 text-center lg:text-left p-6">
        <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
          Building Ideas. Inspiring Minds. Empowering the Future.
        </h1>
        <p className="text-gray-700 md:text-lg leading-relaxed">
          I'm <span className="font-semibold">Zayn</span> — a creative developer and edtech innovator passionate about crafting digital
          solutions that inspire learning, creativity, and connection. From web development to storytelling and coding education,
          I design meaningful experiences that bridge technology and imagination.
        </p>
        <div className="w-full flex max-lg:justify-center max-lg:items-center gap-4 pt-4">
          <button className="bg-black text-white px-5 py-3 rounded-lg shadow hover:bg-gray-800 transition-all">
            View Portfolio
          </button>
          <button className="bg-white text-black px-5 py-3 rounded-lg border border-black shadow hover:bg-gray-100 transition-all">
            Contact Me
          </button>
        </div>
      </div>
    </div>

  )
}

export default page
