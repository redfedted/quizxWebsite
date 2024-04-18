import { useState } from "react";
import About from "./components/About";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Interaction from "./components/Interaction";
import Loop from "./components/Loop";
import Navbar from "./components/Navbar";
import StartPage from "./components/StartPage";
import "./index.css";
import AboutQuizx from "./components/AboutQuizx";
import img1 from "/src/images/illus.png";

function App() {
  const [startPage, setStartPage] = useState(true);
  const start = false;
  return (
    <div>
      {start ? (
        <div>
          <StartPage setStartPage={setStartPage} />
        </div>
      ) : (
        <div>
          <Navbar />
          <Info />
          <Loop />
          <AboutQuizx
            heading={"Elevating Your Education Experience"}
            description={
              " Enhances teaching, deepens learning, fosters collaboration and personalized student engagement with knowledge through our simple innovation"
            }
            imgUrl={img1}
          />{" "}
          <AboutQuizx
            heading={"Advancing a Culture of Academic Innovation"}
            description={
              "Sparks curiosity, strengthens thinking, ignites imagination, and promotes action-oriented learning with our educational ecosystem."
            }
            imgUrl={img1}
          />
          <Interaction />
          {/* <Card1
            h1={"Group"}
            h2={"Connect and Collaborate Anytime, Anywhere."}
          />
          <Card1 h1={"Switch"} h2={"Flip the Switch to Focus and Ideate"} />
          <Card1 h1={"Corridor"} h2={"Discover and Connect"} />
          <Card1 h1={"Trivia"} h2={"Learn, Play, Grow Every Day"} />
          <Card2 />
          <Card1 />
          <Card1 />
          <Card1 />
          <Card2 />
          <Card1 /> */}
          <Contact />
          <Footer />
        </div>
      )}
      `
    </div>
  );
}

export default App;
