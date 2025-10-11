import ProjectSuggestion from "../components/ProjectSuggestion";
import ResourcePanel from "../components/ResourcePanel";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[80vh] text-center space-y-6">
      <h1 className="text-4xl font-bold">Welcome to DevMentor 👋</h1>
      <p className="text-gray-600 text-lg max-w-2xl">
        Your personalized AI-powered learning and tracking companion.
      </p>
      <ResourcePanel />
      <ProjectSuggestion />
    </div>
  );
}
