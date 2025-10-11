import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold">DevMentor</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/roadmap">Roadmap</Link>
        <Link to="/auth/login">Login</Link>
        <Link to="/auth/signup">Signup</Link>
      </div>
    </nav>
  );
}
