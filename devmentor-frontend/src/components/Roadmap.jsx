export default function Roadmap() {
  const roadmapData = [
    { id: 1, title: "Learn HTML", completed: true },
    { id: 2, title: "Learn CSS", completed: true },
    { id: 3, title: "Learn JavaScript", completed: false },
    { id: 4, title: "Learn React", completed: false },
  ];

  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-3">Learning Roadmap 🗺</h2>
      <ul className="space-y-2">
        {roadmapData.map((node) => (
          <li
            key={node.id}
            className={`p-2 border rounded ${
              node.completed ? "bg-green-100" : "bg-gray-100"
            }`}
          >
            {node.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
