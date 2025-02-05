export default function ProjectCard({ 
  image, 
  title, 
  description, 
  tags, 
  demoLink, 
  codeLink,
  demoText = "Demo",
  codeText = "Code"
}) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className={`text-sm ${tag.color} ${tag.bgColor} px-2 py-1 rounded`}
            >
              {tag.name}
            </span>
          ))}
        </div>
        <h4 className="font-semibold text-lg mt-2">{title}</h4>
        <p className="text-gray-600 mt-2">{description}</p>
        <div className="mt-4 flex gap-2">
          {demoLink && (
            <a href={demoLink} className="text-blue-600 hover:underline">
              {demoText}
            </a>
          )}
          {codeLink && (
            <a href={codeLink} className="text-blue-600 hover:underline">
              {codeText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
} 