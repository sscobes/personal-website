import Navbar from "./components/Navbar";
import Home from "./components/Home";

export default function App() {
  return (
    <div className="scrollbar-thumb:bg-slate-700 scrollbar-track:rounded">
      <Navbar />
      <Home />
    </div>
  )
};
