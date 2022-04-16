import Navbar from "./components/Navbar";
import Home from "./components/Home";

export default function App() {
  return (
    <div className="scrollbar-thumb:bg-slate-700 scrollbar-track:rounded">
      <Navbar />
      <Home />
      <p className="text-white w-4/12 mx-[480px] my-[500px]" id="about">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </div>
  )
};
