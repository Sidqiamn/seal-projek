import { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [klikNav, setKlikNav] = useState("beranda");

  const handleNavBlue = (ket) => {
    setKlikNav(ket);
  };

  return (
    <div className="flex justify-between mobile:justify-start fixed top-7 z-0 w-full px-10 mobile:px-2 border-b pb-4 mobile:relative">
      <div className="flex items-center gap-5">
        <img src={logo} alt="Logo" className="animate-bounce" />
        <p className="animate-pulse">Berita Kini</p>
      </div>
      <div className="flex gap-12 items-center mobile:hidden">
        <a
          href="https://api-berita-indonesia.vercel.app/cnn/Beranda"
          className={`text-sm cursor-pointer ${
            klikNav === "beranda" ? "text-blue-500" : ""
          }`}
          onClick={() => handleNavBlue("beranda")}
        >
          Beranda
        </a>
        <a
          href="https://api-berita-indonesia.vercel.app/cnn/terbaru"
          className={`text-sm cursor-pointer ${
            klikNav === "Terbaru" ? "text-blue-500" : ""
          }`}
          onClick={() => handleNavBlue("Terbaru")}
        >
          Terbaru
        </a>
        <a
          href="https://api-berita-indonesia.vercel.app/cnn/hiburan"
          className={`text-sm cursor-pointer ${
            klikNav === "Hiburan" ? "text-blue-500" : ""
          }`}
          onClick={() => handleNavBlue("Hiburan")}
        >
          Hiburan
        </a>
        <a
          href="https://api-berita-indonesia.vercel.app/cnn/gayahidup"
          className={`text-sm cursor-pointer ${
            klikNav === "Gaya Hidup" ? "text-blue-500" : ""
          }`}
          onClick={() => handleNavBlue("Gaya Hidup")}
        >
          Gaya Hidup
        </a>
        <a
          href="https://api-berita-indonesia.vercel.app/cnn/olahraga"
          className={`text-sm cursor-pointer ${
            klikNav === "Olahraga" ? "text-blue-500" : ""
          }`}
          onClick={() => handleNavBlue("Olahraga")}
        >
          Olahraga
        </a>
        <a
          href="https://api-berita-indonesia.vercel.app/cnn/nasional"
          className={`text-sm cursor-pointer ${
            klikNav === "Nasional" ? "text-blue-500" : ""
          }`}
          onClick={() => handleNavBlue("Nasional")}
        >
          Nasional
        </a>
        <a
          href="https://api-berita-indonesia.vercel.app/cnn/internasional"
          className={`text-sm cursor-pointer ${
            klikNav === "Internasional" ? "text-blue-500" : ""
          }`}
          onClick={() => handleNavBlue("Internasional")}
        >
          Internasional
        </a>
      </div>
    </div>
  );
};

export default Navbar;
