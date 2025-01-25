import GithubIcon from "@/components/GithubIcon";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-row">
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
              <p className="w-[71%]">
                Halo, saya merupakan seorang backend developer yang memiliki
                pengelaman 1 tahun,{" "}
                <span className="text-blue-400">
                  <Link href="/about-me">Read more...</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-10 flex-col text-sm">
          <Image
            className="rounded-full"
            src="/widodo.jpg"
            width={100}
            height="100"
            alt="Foto profil"
          />
          <a href="https://github.com/bozid95" target="_blank">
            <GithubIcon />
          </a>
        </div>
      </div>
    </>
  );
}