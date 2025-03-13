"use client";

import Link from "next/link";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
    const projectOneTitle: string = "Knee Rehabilitation Robot - Grad Project";
    const projectOneDescription: string = "I developed an Android app using the Qt Framework to control the robot, worked on its ROS2 programming, and handled the electronics.";
    
    const projectTwoTitle: string = "Instagram Clone (.NET Blazor)";
    const projectTwoDescription: string = "I built an Instagram-like social media platform using .NET Blazor. It includes authentication, post sharing, likes, comments, and user following features."

  return (
    <div className="min-h-screen flex flex-col items-center text-center p-6">
      <h1 className="text-3xl font-bold">My Projects</h1>
      <div className="mt-6 max-w-xl text-left">
        <ProjectCard
          title={projectOneTitle}
          description={projectOneDescription}
        />
        <ProjectCard
          title={projectTwoTitle}
          description={projectTwoDescription}
        />
      </div>
      <Link
        href="/"
        className="mt-6 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
