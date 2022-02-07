import "./App.css";
import CanvasSection from "./components/CanvasSection";
import LeftSection from "./components/LeftSection";
import MainComponent from "./components/MainComponent";
import RightSection from "./components/RightSection";

function App() {
  return (
    <div>
      <LeftSection />
      {/* <CanvasSection /> */}
      <MainComponent />
      <RightSection />
    </div>
  );
}

export default App;
