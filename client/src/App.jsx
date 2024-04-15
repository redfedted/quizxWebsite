import About from "./components/About";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Interaction from "./components/Interaction";
import Loop from "./components/Loop";
import Navbar from "./components/Navbar";
import "./index.css";

function App() {
  const items1 = [
    "Knowledge-Centric",
    "Connect the Dots",
    "Cross-Field Collaboration",
    "LLM-Powered Tools",
    "Modern-insights to Academics / Cutting-Edge to Academics",
    "Contextual Learning",
    "Knowledge-Centric",
    "Connect the Dots",
    "Cross-Field Collaboration",
    "LLM-Powered Tools",
    "Modern-insights to Academics / Cutting-Edge to Academics",
    "Contextual Learning",
  ];
  const items2 = [
    "Simple yet Interesting",
    "Learning Through Play",
    "Inspiring Ideas",
    "Curious by Design",
    "Selectively Gamified",
    "Collective Intelligence",
    "Beyond Syllabus",
    "Simple yet Interesting",
    "Learning Through Play",
    "Inspiring Ideas",
    "Curious by Design",
    "Selectively Gamified",
    "Collective Intelligence",
    "Beyond Syllabus",
  ];
  const items3 = [
    "Social Brainstorming",
    "Beyond Syllabus",
    "Creative Classrooms",
    "Imagining Possibilities",
    "Fun Meets Functionality",
    "Student-Machine Interface",
    "Lecture Synthesizer",
    "Social Brainstorming",
    "Beyond Syllabus",
    "Creative Classrooms",
    "Imagining Possibilities",
    "Fun Meets Functionality",
    "Student-Machine Interface",
    "Lecture Synthesizer",
  ];

  return (
    <div>
      <Navbar />
      <Info />
      <section className="flex flex-col gap-[0.5rem] bg-[#cf0804] py-[1.125rem] mb-[1.472rem]">
        <Loop baseVelocity={1} items={items1}></Loop>
        <Loop baseVelocity={-1} items={items2}></Loop>
        <Loop baseVelocity={1} items={items3}></Loop>
      </section>
      <Interaction />
      <Card1 />
      <Card1 />
      <Card1 />
      <Card2 />
      <Card1 />
      <Card1 />
      <Card1 />
      <Card2 />
      <Card1 />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
