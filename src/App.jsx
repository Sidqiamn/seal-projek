import { useEffect, useState } from "react";
import BeritaTerpopuler from "./components/BeritaTerpopuler";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Rekomendasi from "./components/Rekomendasi";
import SebelumFooter from "./components/SebelumFooter";
import "./index.css";

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);
  return (
    <>
      <div className="">
        <Navbar></Navbar>
      </div>
      <div className=" mt-32 mobile:mt-5 px-10 relative mobile:px-2">
        <Hero></Hero>
        <BeritaTerpopuler scrollY={scrollY}></BeritaTerpopuler>
        <Rekomendasi></Rekomendasi>
        <SebelumFooter scrollY={scrollY}></SebelumFooter>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
