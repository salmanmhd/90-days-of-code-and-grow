import {
  ChevronRight,
  CheckCircle,
  Clock,
  BarChart,
  Users,
  Zap,
  Menu,
  X,
  Star,
} from "lucide-react";
function App() {
  return (
    <div className="">
      <NavBar />
      <LandingPage />
    </div>
  );
}

function LandingPage() {
  return <div className="h-screen bg-white">Hi There</div>;
}

function NavBar() {
  return (
    <nav className="flex h-16 items-center justify-between bg-green-800 px-16">
      <div className="flex h-16 items-center justify-center space-x-1">
        <Zap className="m-2 h-8 w-8 text-emerald-400" />
        <span className="text-2xl font-bold text-emerald-100">
          Productivity Pro
        </span>
      </div>
      <div className="m-6 flex space-x-4 text-emerald-100">
        <p className="duration-200 hover:text-emerald-300">Features</p>
        <p className="duration-200 hover:text-emerald-300">WorkFlow</p>
        <p className="duration-200 hover:text-emerald-300">Pricing</p>
        <p className="duration-200 hover:text-emerald-300">Testimonials</p>
      </div>
    </nav>
  );
}

export default App;
// slate
