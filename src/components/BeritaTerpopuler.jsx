import populerimg1 from "../assets/populerimg1.png";
import populerimg2 from "../assets/populerimg2.png";
import populerimg3 from "../assets/populerimg3.png";
import line from "../assets/Line.png";
import { useRef } from "react";

const BeritaTerpopuler = (props) => {
  const { scrollY } = props;
  const wiggle = useRef();
  if (scrollY > 150) {
    if (wiggle.current) {
      wiggle.current.classList.add("animate-wiggle");
    }
  }
  return (
    <div className="mt-32 " ref={wiggle}>
      <div>
        <p className="font-bold border-l-4 border-blue-500 pl-3">
          Berita Terpopuler
        </p>
        <div className="flex gap-5 mt-10 mobile:flex-col ">
          <div className="flex w-4/12 mobile:w-full gap-4 items-center group transition-all cursor-pointer">
            <img src={populerimg1} alt="" className="group-hover:scale-105" />
            <div>
              <h1 className="font-semibold group-hover:text-blue-500 mobile:text-sm">
                Kenapa Eks Jenderal Israel Kritik Cara IDF Bebaskan 4 Sandera
                Hamas?
              </h1>
              <h5 className="flex gap-3 items-center mt-5 text-sm">
                <span className="text-blue-500 font-bold">Politik</span>
                <div className="bg-slate-500 rounded-full h-1 w-1 "></div>
                <span className="mobile:text-xs">22 Jan 2024</span>
              </h5>
            </div>
            <img src={line} className="h-24 mobile:hidden" alt="" />
          </div>
          <div className="flex w-4/12 group gap-4 mobile:w-full items-center transition-all cursor-pointer">
            <img src={populerimg2} alt="" className="group-hover:scale-105" />
            <div>
              <h1 className="font-semibold group-hover:text-blue-500 mobile:text-sm">
                Daftar 6 Lahan Tambang Jatah Ormas Agama, NU Dapat Bekas Grup
                Bakrie
              </h1>

              <h5 className="flex gap-3 items-center mt-5 text-sm">
                <span className="text-blue-500 font-bold">Nasional</span>
                <div className="bg-slate-500 rounded-full h-1 w-1 "></div>
                <span className="mobile:text-xs">22 Jan 2024</span>
              </h5>
            </div>
            <img src={line} className="h-24 w-1 mobile:hidden" alt="" />
          </div>
          <div className="flex w-4/12 mobile:w-full gap-4 group cursor-pointer transition-all">
            <img src={populerimg3} alt="" className="group-hover:scale-105" />
            <div>
              <h1 className="font-semibold group-hover:text-blue-500 mobile:text-sm">
                Kementerian BUMN Mulai Uji Coba Pegawai Kerja 4 Hari Sepekan
              </h1>
              <h5 className="flex gap-3 items-center mt-5 text-sm">
                <span className="text-blue-500 font-bold">Nasional</span>
                <div className="bg-slate-500 rounded-full h-1 w-1 "></div>
                <span className="mobile:text-xs">22 Jan 2024</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeritaTerpopuler;
