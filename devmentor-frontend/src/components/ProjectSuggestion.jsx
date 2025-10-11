export default function ProjectSuggestion() {
  const projects = [
    "Build a personal portfolio website",
    "Create a REST API for a todo app",
    "Implement a login/signup flow",
  ];

  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-3">Mini Project Suggestions 🧩</h2>
      <ul className="list-disc pl-6">
        {projects.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}
