import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Features from "./components/Features";
import Workflow from "./components/Workflow";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7-xl mx-auto px-6 pt-20">
        <Herosection />
        <Workflow />
        <Features />
        <Footer />
      </div>
    </>
  );
};

export default App;
