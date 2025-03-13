"use client";

import Link from "next/link";

export default function Homepage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-3xl font-bold">Youssef Essam</h1>
      <p className="text-lg text-gray-600">Mechatronics Engineer</p>
      <p className="mt-4 text-gray-700 max-w-lg">
        I graduated as a Mechatronics Engineer from Yildiz Technical University in February 2025.  
        I have experience in robotics, Qt Framework, ROS2, and electronics design.
      </p>
      <Link 
        href="/projects" 
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        My Projects
      </Link>
    </div>
  );
}
