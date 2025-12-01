import React from "react";
import ProjectsHeroImage from "../assets/projects-hero.jpg";

const ProjectsHero = () => {
  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${ProjectsHeroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Projects</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Discover some of the amazing work delivered by our certified builders,
          electricians, and plumbers across Zimbabwe.
        </p>
      </div>
    </div>
  );
};

export default ProjectsHero;
