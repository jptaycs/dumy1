"use client";
import React from "react";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="pt-26 px-6 md:px-60 max-w-6xl mx-auto">
        {/* Hero Section with Hi and Profile */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Side - Hi Text */}
          <div className="flex justify-center md:justify-center">
            <h1 className="text-8xl md:text-9xl font-bold text-white">Hi</h1>
          </div>
          
          {/* Right Side - Profile Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <Image
                src="/profile.jpg"
                alt="Jerome Patrick Tayco"
                width={350}
                height={350}
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* About Content Section */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Side - Main Description */}
          <div className="space-y-6">
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              I'm <span className="text-white font-semibold">Jerome Patrick R. Tayco</span>, 22 years old, a computer science fresh graduate passionate about technology, problem-solving, and building things that make life easier—or at least more interesting. While I'm at the beginning of my professional journey, I'm eager to contribute, grow, and learn from real-world experience. I'm especially interested in software development, artificial intelligence, and how tech can be used to improve everyday life.
            </p>
          </div>

          {/* Right Side - AI Brain Icon */}
          <div className="flex justify-center md:justify-start">
              <div className="text-4xl">
                <Image
                src="/brain.svg"
                alt="Jerome Patrick Tayco"
                width={350}
                height={350}
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
              </div>
          </div>
        </div>

        {/* Second Content Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side - Collaboration Icon */}
          <div className="flex justify-center md:justify-end order-2 md:order-1">
                <div className="text-4xl">
                <Image
                src="/hands.svg"
                alt="Jerome Patrick Tayco"
                width={350}
                height={350}
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
              </div>
          </div>

          {/* Right Side - Description */}
          <div className="space-y-6 order-1 md:order-2">
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              I approach projects with curiosity and persistence, and I enjoy collaborating with others just as much as figuring things out on my own. Whether it's a class assignment, a personal app, or exploring a new framework, I like diving deep and finding the why behind things.
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;