import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Refer from "./components/Refer";
import Footer from "./components/Footer";
import Benefitstable from "./components/Benefitstable";
import Faqs from "./components/Faqs";
import Support from "./components/Support";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="font-Roboto overflow-x-hidden select-none">
      <Toaster position="bottom-left" reverseOrder={false} />
      <div className="w-full fixed top-0 z-20 bg-white shadow-sm">
        <Navbar />
      </div>
      <div className="mt-32">
        <div id="refer">
          <HeroSection />
        </div>
        <div>
          <Refer />
        </div>
        <div id="benefits">
          <Benefitstable />
        </div>
        <div id="faqs">
          <Faqs />
        </div>
        <div id="support">
          <Support />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
