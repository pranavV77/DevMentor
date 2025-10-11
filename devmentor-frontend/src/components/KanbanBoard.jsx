export default function KanbanBoard() {
  const tasks = {
    todo: ["Learn Git", "Understand APIs"],
    inProgress: ["Build REST API"],
    done: ["Setup Dev Environment"],
  };

  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Progress Tracker 📈</h2>
      <div className="grid grid-cols-3 gap-4">
        {Object.entries(tasks).map(([status, list]) => (
          <div key={status}>
            <h3 className="font-bold capitalize mb-2">{status}</h3>
            {list.map((task, i) => (
              <div key={i} className="p-2 mb-2 bg-gray-100 rounded">
                {task}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
