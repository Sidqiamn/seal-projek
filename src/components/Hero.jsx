import { useState } from "react";
import rightarrowtop from "../assets/arrowrighttop.png";
import calender from "../assets/calender.png";
import footbalimg from "../assets/footballimg.png";
import panahkanan from "../assets/panahkanan.png";
import panahkiri from "../assets/panahkiri.png";

const Hero = () => {
  const [countHeroPage, countSetHeroPage] = useState(1);
  return (
    <div className="mt-20 mobile:mt-0 animate-wiggle">
      <div className="flex gap-20 justify-between mobile:flex-col mobile:items-center">
        <div className="w-5/12 mobile:w-full">
          <h1 className="font-semiboldbold text-4xl mobile:text-2xl">
            Respons PSSI Soal Opsi Pindah dari GBK jika Lolos Babak 3
            Kualifikasi
          </h1>
          <h3 className="mt-5">
            Ketua Badan Tim Nasional (BTN) PSSI Sumardji merespons peluang
            Timnas Indonesia pindah dari Stadion Utama Gelora Bung Karno (GBK)
            apabila lolos ke putaran ketiga Kualifikasi Piala Dunia 2026.
          </h3>
          <h6 className="mt-5 flex gap-3 items-center">
            <span>
              <img src={calender} alt="" />
            </span>
            22 Januari 2024
          </h6>
          <h6 className="mt-5 mobile:mt-2 flex gap-3 mobile:gap-1 items-center hover:text-blue-500 cursor-pointer w-fit mobile:text-sm">
            Baca Selengkapnya{" "}
            <span>
              <img className="mobile:h-3" src={rightarrowtop} alt="" />
            </span>
          </h6>
        </div>
        <div className=" ml-auto">
          <img className="rounded-xl" src={footbalimg} alt="" />
        </div>
      </div>

      <div className="flex gap-4 w-fit mx-auto mt-10">
        <img
          onClick={() => {
            if (countHeroPage !== 1) {
              countSetHeroPage((prev) => prev - 1);
            }
          }}
          src={panahkiri}
          alt="Panah Kiri"
          className="cursor-pointer "
        />

        <p>{countHeroPage}</p>
        <p>dari</p>
        <p>5</p>
        <img
          onClick={() => {
            if (countHeroPage !== 5) {
              countSetHeroPage((prev) => prev + 1);
            }
          }}
          src={panahkanan}
          alt=""
          className="cursor-pointer "
        />
      </div>
    </div>
  );
};

export default Hero;
