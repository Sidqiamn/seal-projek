import { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [klikNav, setKlikNav] = useState("beranda");

  const handleNavBlue = (ket) => {
    setKlikNav(ket);
  };

  return (
    <div className="flex justify-between mobile:justify-start fixed pt-4 top-0 z-0 w-full px-10 mobile:px-2 border-b pb-4 mobile:relative">
      <div className="flex items-center gap-5 ">
        <img src={logo} alt="Logo" className="animate-bounce" />
        <p className="animate-pulse">Berita Kini</p>
      </div>
      <div className="flex gap-12 items-center mobile:hidden">
        <h5
          className={`text-sm cursor-pointer ${
            klikNav === "beranda" ? "text-blue-500" : ""
          }`}
          onClick={() => handleNavBlue("beranda")}
        >
          Beranda
        </h5>
        <h5
          className={`text-sm cursor-pointer ${
            klikNav === "Terbaru" ? "text-blue-500" : ""
          }`}
          onClick={() => handleNavBlue("Terbaru")}
        >
          Terbaru
        </h5>
        <h5
          className={`text-sm cursor-pointer ${
            klikNav === "Hiburan" ? "text-blue-500" : ""
          }`}
          onClick={() => handleNavBlue("Hiburan")}
        >
          Hiburan
        </h5>
        <h5
          className={`text-sm cursor-pointer ${
            klikNav === "Gaya Hidup" ? "text-blue-500" : ""
          }`}
          onClick={() => handleNavBlue("Gaya Hidup")}
        >
          Gaya Hidup
        </h5>
        <h5
          className={`text-sm cursor-pointer ${
            klikNav === "Olahraga" ? "text-blue-500" : ""
          }`}
          onClick={() => handleNavBlue("Olahraga")}
        >
          Olahraga
        </h5>
        <h5
          className={`text-sm cursor-pointer ${
            klikNav === "Nasional" ? "text-blue-500" : ""
          }`}
          onClick={() => handleNavBlue("Nasional")}
        >
          Nasional
        </h5>
        <h5
          className={`text-sm cursor-pointer ${
            klikNav === "Internasional" ? "text-blue-500" : ""
          }`}
          onClick={() => handleNavBlue("Internasional")}
        >
          Internasional
        </h5>
      </div>
    </div>
  );
};

export default Navbar;
