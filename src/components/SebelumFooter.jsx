import topfooter1 from "../assets/topfooter1.png";
import topfooter2 from "../assets/topfooter2.png";
import topfooter3 from "../assets/topfooter3.png";
import pesawattitik from "../assets/pesawattitik.png";
import rectangel from "../assets/Rectangle.png";
import { useRef } from "react";

const SebelumFooter = (props) => {
  const { scrollY } = props;
  const wiggle = useRef();
  if (scrollY > 1400) {
    if (wiggle.current) {
      wiggle.current.classList.add("animate-wiggle");
    }
  }
  return (
    <div
      className="bg-[#00caa3] h-[300px] rounded-2xl flex items-center mt-32 mobile:flex-col"
      ref={wiggle}
    >
      <div className="w-5/12 px-20 mobile:px-2 mobile:w-full">
        <h1 className="font-semibold text-4xl text-white font-Montserrat mobile:text-xl mobile:mt-10 mobile:ml-2">
          Petualangan Edukatif bersama Malang Mbois City Tour!
        </h1>
        <h3 className="font-Montserrat text-white text-xl mt-2  mobile:hidden">
          Petualangan Edukatif bersama Malang Mbois City Tour!
        </h3>
      </div>
      <div className="flex w-6/12 mobile:w-full ml-auto relative h-full justify-center items-center">
        <img
          src={rectangel}
          className="absolute right-8 top-12 mobile:-top-5"
          alt=""
        />
        <img
          src={pesawattitik}
          className="absolute top-8 right-60 mobile:-top-5"
          alt=""
        />
        <div className="bg-white  group p-[2px] pb-0 h-fit rounded-xl mobile:rounded-md rotate-[5deg] font-Montserrat translate-x-16 cursor-pointer hover:rotate-0 transition-all">
          <img
            src={topfooter1}
            alt=""
            className="-rotate-[4deg] h-32 mobile:h-20"
          />
          <h1 className="absolute bg-white group-hover:text-blue-500 p-2 mobile:rounded-sm mobile:-bottom-1 mobile:p-[1px]  mobile:text-[7px] rounded-lg right-5 mobile:right-6 -bottom-3 font-Montserrat text-xs font-semibold">
            Musium Brawijaya
          </h1>
        </div>
        <div className="bg-white relative p-[4px] group rounded-xl h-fit font-Montserrat mobile:translate-x-10 translate-x-6 cursor-pointer translate-y-10 hover:scale-105 transition-all">
          <img src={topfooter2} alt="" className=" h-32 mobile:h-20" />
          <h1 className="absolute bg-white p-2 mobile:p-[2px] mobile:text-[7px] mobile:rounded-sm mobile:-bottom-1 mobile:right-7 group-hover:text-blue-500 rounded-lg right-9 -bottom-3 font-Montserrat text-xs font-semibold">
            Kayoetangan
          </h1>
        </div>

        <div className="bg-white relative p-[1px] h-fit rounded-xl group -rotate-[5deg] -translate-y-10 cursor-pointer -translate-x-3 font-Montserrat transition-all hover:rotate-0">
          <img src={topfooter3} alt="" className="rotate-6 h-32 mobile:h-20" />
          <h1 className="absolute bg-white p-2 rounded-md mobile:p-[2px] mobile:text-[7px] mobile:rounded-sm mobile:-bottom-1 mobile:right-5  right-5 -bottom-3 group-hover:text-blue-500 font-Montserrat text-xs font-semibold">
            Kebun Binatang
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SebelumFooter;
