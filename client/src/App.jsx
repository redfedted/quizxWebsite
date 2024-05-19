import StartPage from "./components/StartPage";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import TandC from "./components/TandC";
import JoinWaitlist from "./components/JoinWaitlist";
import DeleteSection from "./components/DeleteSection";

function App() {
  return (
    // <div>
    //   {startPage ? (
    //     <div>
    //       {/* <StartPage setStartPage={setStartPage} /> */}
    //       <TandC />
    //     </div>
    //   ) : (
    //     <AnimatePresence>
    //       <motion.div
    //         initial={{ opacity: 0 }}
    //         animate={{ opacity: 1 }}
    //         exit={{ opacity: 0 }}
    //       >
    //         {window.scrollTo(0, 0)}
    //         <Navbar />
    //         <Info />
    //         <Loop />
    //         <AboutQuizx
    //           heading={"Elevating Your Education Experience"}
    //           description={
    //             " Enhances teaching, deepens learning, fosters collaboration and personalized student engagement with knowledge through our simple innovation"
    //           }
    //           imgUrl={img1}
    //           order={true}
    //         />{" "}
    //         <AboutQuizx
    //           heading={"Advancing a Culture of Academic Innovation"}
    //           description={
    //             "Sparks curiosity, strengthens thinking, ignites imagination, and promotes action-oriented learning with our educational ecosystem."
    //           }
    //           order={false}
    //           imgUrl={img2}
    //         />{" "}
    //         <AboutQuizx
    //           heading={"Future-Proofing You with Changing Technology"}
    //           description={
    //             "QuizX, your ally in ed-tech progress, smoothly blends the newest tech and ideas into your institution, uniting traditional and digital learning."
    //           }
    //           order={true}
    //           imgUrl={img3}
    //         />
    //         <Interaction />
    //         {/* <Card1
    //         h1={"Group"}
    //         h2={"Connect and Collaborate Anytime, Anywhere."}
    //       />
    //       <Card1 h1={"Switch"} h2={"Flip the Switch to Focus and Ideate"} />
    //       <Card1 h1={"Corridor"} h2={"Discover and Connect"} />
    //       <Card1 h1={"Trivia"} h2={"Learn, Play, Grow Every Day"} />
    //       <Card2 />
    //       <Card1 />
    //       <Card1 />
    //       <Card1 />
    //       <Card2 />
    //       <Card1 /> */}
    //         <Contact />
    //         <Footer />
    //       </motion.div>
    //     </AnimatePresence>
    //   )}
    //   `
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />}></Route>
        <Route path="/home" element={<Layout />}></Route>
        <Route path="/t&c" element={<TandC />}></Route>
        <Route path="/joinwaitlist" element={<JoinWaitlist />}></Route>
        <Route path="/deleteprofile" element={<DeleteSection />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
