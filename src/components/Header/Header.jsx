import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="shadow p-4 bg-white sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Avita Logistics</h1>
        <ul className="flex gap-6">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/tracking">Tracking</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
