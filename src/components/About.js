// src/components/About.js
import React from 'react';

export default function About() {
  return (
    <section id="about" className="bg-black min-h-screen w-full flex flex-col justify-center items-center p-8">
      <div className="text-center max-w-3xl">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-slate-400">
          This is the about section. Here you can write a brief introduction about yourself or your company, highlighting your skills, passion, and experience in web development.
        </p>
      </div>
    </section>
  );
}
