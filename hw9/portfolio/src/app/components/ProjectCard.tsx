interface ProjectProps {
    title: string;
    description: string;
  }
  
  export default function ProjectCard({ title, description }: ProjectProps) {
    return (
      <div className="mb-4 p-4 border rounded shadow">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-700 mt-2">{description}</p>
      </div>
    );
  }
  