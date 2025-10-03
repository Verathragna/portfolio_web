interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

export default function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="mt-2">{description}</p>
      <a href={link} className="text-blue-600 mt-3 inline-block">Learn More →</a>
    </div>
  );
}