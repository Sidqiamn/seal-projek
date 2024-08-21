import logoFooter from "../assets/logoFooter.png";
import yt from "../assets/yt.png";
import ig from "../assets/ig.png";
import fb from "../assets/fb.png";
import pesawatBiru from "../assets/pesawatBiru.png";

const Footer = () => {
  return (
    <div className="bg-[#2c3c4d] p-14 mobile:px-8 animate-wiggle text-white flex mobile:text-s justify-between mt-32 mobile:flex-col mobile:gap-20">
      <div className="flex justify-between flex-col">
        <div className="flex gap-3 items-center">
          <img src={logoFooter} alt="" className="mobile:h-10" />
          <h1 className="text-2xl font-bold">Berita Kini</h1>
        </div>
        <div>
          <p className="text-xl font-semibold mobile:text-base mobile:mt-4">
            Ikuti Kami
          </p>
          <div className="flex gap-3 items-center mt-7 mobile:mt-2">
            <img src={yt} className="cursor-pointer mobile:h-7" alt="" />
            <img src={ig} alt="" className="cursor-pointer mobile:h-7" />
            <img src={fb} alt="" className="cursor-pointer mobile:h-7" />
          </div>
        </div>
      </div>
      <div className="flex gap-16 mobile:justify-between">
        <div className="flex flex-col gap-5 w-1/2">
          <h1 className="text-lg mb-1">Telusuri</h1>
          <h3 className="text-sm">Beranda</h3>
          <h3 className="text-sm">Kesehatan</h3>
          <h3 className="text-sm">Otomotif</h3>
          <h3 className="text-sm">Politik</h3>
          <h3 className="text-sm">Olahraga</h3>
          <h3 className="text-sm">Nasional</h3>
          <h3 className="text-sm">Internasional</h3>
        </div>
        <div className="flex flex-col gap-5 w-1/2">
          <h1 className="text-lg mb-1">Bantuan</h1>
          <h3 className="text-sm">Kontak Kami</h3>
          <h3 className="text-sm">Laporan Pembajakan</h3>
          <h3 className="text-sm">Kebijakan</h3>
        </div>
        <div className="relative w-fit h-fit mobile:hidden">
          <p>Berlangganan Berita Terbaru</p>
          <div className="relative w-fit h-fit mt-6">
            <input
              type="text"
              placeholder="Masukan Email"
              className="px-1 w-72 py-3 outline-none border-none rounded-lg  text-black"
              name=""
              id=""
            />
            <img
              src={pesawatBiru}
              className="absolute top-1/2 h-10 right-1 -translate-y-1/2 cursor-pointer"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
