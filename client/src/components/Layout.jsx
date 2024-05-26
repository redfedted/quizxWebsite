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
        
        <Info />
        <Loop />
        <AboutQuizx
          heading={"Elevating Your Education Experience"}
          description={
            " Enhances teaching, deepens learning, fosters collaboration and personalized student engagement with knowledge through our simple innovation"
          }
          imgUrl={img1}
          order={true}
          list={[
            "Interactive and Gamified Learning for engaging students with lively, memorable education tools.",
            "AI-Powered Teaching Support for streamlining lecture prep and enhance classroom interaction.",
            "Curated Educational Content for connecting learners with the latest field-specific breakthroughs.",
            "Collaborative Learning Environment for fostering idea exchange and peer networking for collective intelligence.",
            "Personalized Academic Tools for organizing and deliver targeted knowledge efficiently.",
          ]}
        />{" "}
        <AboutQuizx
          heading={"Advancing a Culture of Academic Innovation"}
          description={
            "Sparks curiosity, strengthens thinking, ignites imagination, and promotes action-oriented learning with our educational ecosystem."
          }
          order={false}
          imgUrl={img2}
          list={[
            "Unique Thinking Challenges - Engaging knowledge puzzles that inspire diverse thinking skills and unique cognitive talents.",
            "Imagination Meets Knowledge - Smart content recommendations encouraging students to dream up fresh ideas by applying their imagination.",
            "Collaboration Culture - A social hub connecting students across institutes to team up and combine their smarts in exciting new ways.",
            "Curiosity Adventures - Tools helping students explore emerging topics and to discover what sparks their passion",
            "Teaching Studio - A place for passionate teachers to craft amazingly fun, love-filled learning journeys.",
          ]}
        />{" "}
        <AboutQuizx
          heading={"Future-Proofing You with Changing Technology"}
          description={
            "QuizX, your ally in ed-tech progress, smoothly blends the newest tech and ideas into your institution, uniting traditional and digital learning."
          }
          order={true}
          imgUrl={img3}
          list={[
            "Tech-Enabled Campus Transformation - Revolutionizing the academic landscape by digitizing campuses, providing real-time analytics, and supporting data-driven decision-making.",
            "AI-Enhanced Academic Excellence - Harnessing the power of AI and large language models to offer personalized teaching aids to optimize lecture preparation and elevating classroom engagement.",
            "Intuitive Design Meets Education - Blending intuitive design with best practices in experience design and gamification to create an immersive learning environment.",
            "Secure, Streamlined Communication - Ensuring seamless and professional communication channels between teachers, students, and colleges, while prioritizing data security and privacy.",
            "Innovation at Your Fingertips - Refining our offerings continuously to align with the latest technological advancements, ensuring our institutional partners are always at the forefront of educational innovation.",
          ]}
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
