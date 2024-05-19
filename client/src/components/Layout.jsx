import Contact from "./Contact";
import Footer from "./Footer";
import Info from "./Info";
import Interaction from "./Interaction";
import Loop from "./Loop";
import Navbar from "./Navbar";
import "../index.css";
import AboutQuizx from "./AboutQuizx";
import img1 from "/src/svgs/about1.svg";
import img2 from "/src/svgs/about2.svg";
import img3 from "/src/svgs/about3.svg";
import { AnimatePresence, motion } from "framer-motion";

function Layout() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {window.scrollTo(0, 0)}
        <Navbar home={"Home"} />
        <Info />
        <Loop />
        <AboutQuizx
          heading={"Elevating Your Education Experience"}
          description={
            " Enhances teaching, deepens learning, fosters collaboration and personalized student engagement with knowledge through our simple innovation"
          }
          imgUrl={img1}
          order={true}
        />{" "}
        <AboutQuizx
          heading={"Advancing a Culture of Academic Innovation"}
          description={
            "Sparks curiosity, strengthens thinking, ignites imagination, and promotes action-oriented learning with our educational ecosystem."
          }
          order={false}
          imgUrl={img2}
        />{" "}
        <AboutQuizx
          heading={"Future-Proofing You with Changing Technology"}
          description={
            "QuizX, your ally in ed-tech progress, smoothly blends the newest tech and ideas into your institution, uniting traditional and digital learning."
          }
          order={true}
          imgUrl={img3}
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
      </motion.div>
    </AnimatePresence>
  );
}

export default Layout;
