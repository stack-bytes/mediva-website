import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7-xl mx-auto px-6 pt-20">
        <Herosection />
      </div>
    </>
  );
};

export default App;
