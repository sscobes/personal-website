import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";

export default function App() {
  return (
    <div className="scrollbar-thumb:bg-slate-700 scrollbar-track:rounded">
      <Navbar />
      <Home />
      <About />
      <Experience />
    </div>
  )
};
