import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";

function DeleteSection() {
  return (
    <div>
      {window.scrollTo(0, 0)}
      <Navbar home={"Home"} />
      <div>
        <h1 className="text-6xl text-center py-60">An email will be sent for confirmation</h1>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default DeleteSection;
