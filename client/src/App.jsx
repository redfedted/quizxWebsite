import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Loop from "./components/Loop";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div >
      <Navbar />
      <Info />  
       <Loop/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
