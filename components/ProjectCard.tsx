interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  videoSrc?: string;
  posterImage?: string;
  techStack?: string[];
}

export default function ProjectCard({
  title,
  description,
  link,
  videoSrc,
  posterImage,
  techStack,
}: ProjectCardProps) {
  return (
    <div className="group flex flex-col space-y-4 rounded-2xl border p-6 shadow transition-shadow hover:shadow-xl">
      {(videoSrc || posterImage) && (
        <div className="relative overflow-hidden rounded-xl bg-slate-900/5">
          {videoSrc ? (
            <video
              className="h-48 w-full object-cover opacity-90 transition duration-500 ease-out group-hover:scale-105 group-hover:opacity-100"
              src={videoSrc}
              poster={posterImage}
              muted
              loop
              playsInline
              autoPlay
            />
          ) : (
            <img
              src={posterImage}
              alt={`${title} thumbnail`}
              className="h-48 w-full object-cover opacity-90 transition duration-500 ease-out group-hover:scale-105 group-hover:opacity-100"
            />
          )}
        </div>
      )}

      <div className="space-y-3">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-slate-600">{description}</p>

        {techStack?.length ? (
          <ul className="flex flex-wrap gap-2 text-sm text-slate-600">
            {techStack.map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-700"
              >
                {tech}
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <a
        href={link}
        className="inline-flex items-center gap-2 font-medium text-blue-600 transition-colors hover:text-blue-700"
      >
        Learn More →
      </a>
    </div>
  );
}
