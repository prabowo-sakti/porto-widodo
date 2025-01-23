import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="  bg-[#181818] border-[0.1px] border-white-500 w-[638px] h-screen m-auto rounded-xl fixed top-[56.3%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden">
        <div>
          {/* Ini untuk elemen sebelah kiri, seperti nama dan media sosial */}
          <div className="flex">
            <div>
              <div className="flex flex-col relative left-6 top-10  text-white">
                <span className="font-bold text-2xl">Widodo</span>
                <div className="flex items-center space-x-2">
                  <a
                    href="https://www.threads.net/@wedoo.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2"
                  >
                    <span className="text-[15px]">wedoo.dev</span>
                    <img
                      src="/thread.svg"
                      alt="Thread Icon"
                      className="w-4 h-4 text-white"
                    />
                  </a>
                </div>
                <span className="w-[71%]">
                  Halo, saya merupakan seorang backend developer yang memiliki
                  pengelaman 1 tahun
                </span>
              </div>
            </div>
          </div>
          <div className="foto-profil"></div>
        </div>
      </div>
    </>
  );
}
