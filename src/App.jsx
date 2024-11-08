import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7-xl mx-auto px-6 pt-20">
        <Herosection />
        <Footer />
      </div>
    </>
  );
};

export default App;
