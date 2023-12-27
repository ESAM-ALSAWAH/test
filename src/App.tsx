import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import {
  ThirdSection,
  FirstSection,
  SecondeSection,
} from "@/components/sections";
const App = (): JSX.Element => {
  return (
    <div className="app ">
      <Hero />
      <FirstSection />
      <SecondeSection />

      <ThirdSection />
      <Footer />
    </div>
  );
};

export default App;
