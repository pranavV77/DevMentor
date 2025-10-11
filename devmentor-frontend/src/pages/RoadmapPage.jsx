import Roadmap from "../components/Roadmap";
import KanbanBoard from "../components/KanbanBoard";

export default function RoadmapPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4">
      <Roadmap />
      <KanbanBoard />
    </div>
  );
}
