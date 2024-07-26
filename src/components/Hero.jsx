// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-40 bg-black h-screen">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white via-transparent to-transparent opacity-20"></div>
      <h1 className="relative text-5xl font-bold mb-4 text-white z-10">
        Begg is a socially inclined fintech app that makes requesting funds easier
      </h1>
      <p className="relative text-xl mb-8 text-white z-10">
        Make your money work for you, or let close ones help you out with Begg
      </p>
      <button className="relative bg-white text-black px-8 py-4 rounded-lg font-semibold z-10">
        Start building
      </button>
    </section>
  );
};

export default Hero;
