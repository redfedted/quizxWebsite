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
  return (
    <div>
      <Navbar />
      <Info />
      <Loop />
      <Interaction />
      <Card1 h1={"Group"} h2={"Connect and Collaborate Anytime, Anywhere."} />
      <Card1 h1={"Switch"} h2={"Flip the Switch to Focus and Ideate"} />
      <Card1 h1={"Corridor"} h2={"Discover and Connect"} />
      <Card1 h1={"Trivia"} h2={"Learn, Play, Grow Every Day"} />
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
