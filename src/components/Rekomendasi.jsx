import search from "../assets/search.png";
import rekomendasi1 from "../assets/rekomendasi1.png";
import rekomendasi2 from "../assets/rekomendasi2.png";
import rekomendasi3 from "../assets/rekomendasi3.png";
import rekomendasi4 from "../assets/rekomendasi4.png";
import rekomendasi5 from "../assets/rekomendasi5.png";
import rekomendasi6 from "../assets/rekomendasi6.png";
import rekomendasi7 from "../assets/rekomendasi7.png";
import rekomendasi8 from "../assets/rekomendasi8.png";
import arrowrekom1 from "../assets/arrowrekom.png";
import arrowrekom2 from "../assets/arrowrekom2.png";
import { useState } from "react";

const Rekomendasi = () => {
  const [pageRekom, setPageRekom] = useState(1);
  const handleRekomPages = (value) => {
    setPageRekom(value);
  };

  return (
    <div className="mt-32">
      <div className="flex justify-between items-center">
        <p className="font-bold border-l-4 border-blue-500 pl-3 h-fit">
          Rekomendasi Untuk Anda
        </p>
        <div className="relative w-4/12  mobile:h-6">
          <input
            type="text"
            placeholder="Cari disini..."
            className="outline-none border-2 p-3 mobile:p-0 w-full mobile:text-xs "
            name=""
            id=""
          />
          <img
            src={search}
            className="absolute h-5 right-3 top-1/2 mobile:h-3 mobile:-translate-y-1/4 mobile:right-1  -translate-y-1/2"
            alt=""
          />
        </div>
      </div>
      <div className="mt-10 grid-cols-4 grid gap-14 mobile:grid-cols-2 mobile:gap-4">
        <div className="group cursor-pointer  mobile:flex mobile:flex-col mobile:justify-between ">
          <img src={rekomendasi1} alt="" />
          <h1 className="mt-3 font-semibold group-hover:text-blue-500  mobile:text-xs">
            Pj. Gubernur Adhy Tekankan Pelayanan Berkualitas saat Sharing
            Session di RSUD Dr. Soetomo
          </h1>

          <h5 className="flex gap-3 items-center mt-5 text-sm">
            <span className="text-blue-500 font-bold text-[10px] ">
              Nasional
            </span>
            <div className="bg-slate-500 rounded-full h-1 w-1 "></div>
            <span className="text-[10px]">22 Jan 2024</span>
          </h5>
        </div>
        <div className="group cursor-pointer  mobile:flex mobile:flex-col mobile:justify-between ">
          <img src={rekomendasi2} alt="" />
          <h1 className="mt-3 font-semibold group-hover:text-blue-500 mobile:text-xs">
            Flypass Bonanza dan Heli Bell 505 Warnai Tupdik dan Wing Day 11
            Perwira Penerbang TNl AL
          </h1>

          <h5 className="flex gap-3 items-center mt-5 text-sm">
            <span className="text-blue-500 font-bold text-[10px]">
              Nasional
            </span>
            <div className="bg-slate-500 rounded-full h-1 w-1 "></div>
            <span className="text-[10px]">22 Jan 2024</span>
          </h5>
        </div>
        <div className="group cursor-pointer mobile:flex mobile:flex-col mobile:justify-between ">
          <img src={rekomendasi3} alt="" />
          <h1 className="mt-3 font-semibold group-hover:text-blue-500 mobile:text-xs">
            Perwira Penerbangan TNl AL Raih Gelar “Double Degree di PSL
            Université Paris
          </h1>

          <h5 className="flex gap-3 items-center mt-5 text-sm">
            <span className="text-blue-500 font-bold text-[10px]">
              Nasional
            </span>
            <div className="bg-slate-500 rounded-full h-1 w-1 "></div>
            <span className="text-[10px]">22 Jan 2024</span>
          </h5>
        </div>
        <div className="group cursor-pointer mobile:flex mobile:flex-col mobile:justify-between ">
          <img src={rekomendasi4} alt="" />
          <h1 className="mt-3 font-semibold group-hover:text-blue-500 mobile:text-xs">
            Bank Jatim QRIS Ramadan Vaganza Resmi Dibuka Selama Sepekan
          </h1>

          <h5 className="flex gap-3 items-center mt-5 text-sm">
            <span className="text-blue-500 font-bold text-[10px]">
              Nasional
            </span>
            <div className="bg-slate-500 rounded-full h-1 w-1 "></div>
            <span className="text-[10px]">22 Jan 2024</span>
          </h5>
        </div>
        <div className="group cursor-pointer mobile:flex mobile:flex-col mobile:justify-between ">
          <img src={rekomendasi5} alt="" />
          <h1 className="mt-3 font-semibold group-hover:text-blue-500 mobile:text-xs">
            PLN Sukses Lakukan Pemeliharaan Off 2 tahunan PMT GISTET 500KV
            Gresik
          </h1>

          <h5 className="flex gap-3 items-center mt-5 text-sm">
            <span className="text-blue-500 font-bold text-[10px]">
              Nasional
            </span>
            <div className="bg-slate-500 rounded-full h-1 w-1 "></div>
            <span className="text-[10px]">22 Jan 2024</span>
          </h5>
        </div>
        <div className="group cursor-pointer mobile:flex mobile:flex-col mobile:justify-between ">
          <img src={rekomendasi6} alt="" />
          <h1 className="mt-3 font-semibold group-hover:text-blue-500 mobile:text-xs">
            Bantu Pertahanan di Indonesia, Profesor ITS Ciptakan Bahan Antiradar
          </h1>

          <h5 className="flex gap-3 items-center mt-5 text-sm">
            <span className="text-blue-500 font-bold text-[10px]">
              Nasional
            </span>
            <div className="bg-slate-500 rounded-full h-1 w-1 "></div>
            <span className="text-[10px]">22 Jan 2024</span>
          </h5>
        </div>
        <div className="group cursor-pointer mobile:flex mobile:flex-col mobile:justify-between ">
          <img src={rekomendasi7} alt="" />
          <h1 className="mt-3 font-semibold group-hover:text-blue-500 mobile:text-xs">
            BKD Jatim Bersama BNN Gelar Tes Narkoba Bagi Pegawai Non ASN
          </h1>

          <h5 className="flex gap-3 items-center mt-5 text-sm">
            <span className="text-blue-500 font-bold text-[10px]">
              Nasional
            </span>
            <div className="bg-slate-500 rounded-full h-1 w-1 "></div>
            <span className="text-[10px]">22 Jan 2024</span>
          </h5>
        </div>
        <div className="group cursor-pointer mobile:flex mobile:flex-col mobile:justify-between ">
          <img src={rekomendasi8} alt="" />
          <h1 className="mt-3 font-semibold group-hover:text-blue-500 mobile:text-xs">
            Bank Indonesia Prediksi Ekonomi Jatim 2024 Tumbuh Lebih Tinggi
          </h1>

          <h5 className="flex gap-3 items-center mt-5 text-sm">
            <span className="text-blue-500 font-bold text-[10px]">
              Nasional
            </span>
            <div className="bg-slate-500 rounded-full h-1 w-1 "></div>
            <span className="text-[10px]">22 Jan 2024</span>
          </h5>
        </div>
      </div>
      <div className="flex justify-between items-center mt-20 mobile:mt-9 mobile:flex-col mobile:gap-4">
        <p className="mobile:text-xs">Showing 1 to 10 of 97 results</p>
        <div className="flex gap-6 items-center mobile:text-xs">
          <span>
            <img src={arrowrekom1} alt="" />
          </span>
          <span className="cursor-pointer">Previous</span>
          <span
            className={`${
              pageRekom == 1 ? "bg-blue-500 text-white px-2 rounded-md" : ""
            }cursor-pointer`}
            onClick={() => handleRekomPages(1)}
          >
            1
          </span>
          <span
            className={`${
              pageRekom == 2 ? "bg-blue-500 text-white px-2 rounded-md" : ""
            } cursor-pointer`}
            onClick={() => handleRekomPages(2)}
          >
            2
          </span>
          <span
            className={`${
              pageRekom == "..." ? "bg-blue-500 text-white px-2 rounded-md" : ""
            } cursor-pointer`}
            onClick={() => handleRekomPages("...")}
          >
            ...
          </span>
          <span
            className={`${
              pageRekom == 8 ? "bg-blue-500 text-white px-2 rounded-md" : ""
            } cursor-pointer`}
            onClick={() => handleRekomPages(8)}
          >
            8
          </span>
          <span
            className={`${
              pageRekom == 9 ? "bg-blue-500 text-white px-2 rounded-md" : ""
            } cursor-pointer`}
            onClick={() => handleRekomPages(9)}
          >
            9
          </span>
          <span className="cursor-pointer">Next</span>
          <span>
            <img src={arrowrekom2} alt="" />
          </span>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Rekomendasi;
