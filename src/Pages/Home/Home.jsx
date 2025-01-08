import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div
      id="home-wrapper"
      className="flex min-h-[100dvh] items-center bg-cover bg-bottom bg-no-repeat pt-[120px] text-white sm:bg-center md:pt-[150px]"
    >
      <div className="container">
        <div className="items-center justify-between lg:mx-auto lg:flex lg:w-[85%]">
          <div className="xs:max-w-[400px] mx-auto max-w-[330px] px-4 text-center md:max-w-[512px] lg:m-0 lg:text-start">
            <p className="font-barlow mb-2 text-blue-light md:text-xl lg:text-[28px]">
              SO, YOU WANT TO TRAVEL TO
            </p>
            <h1 className="mb-2 font-bellefair text-[80px] md:text-[144px]">
              SPACE
            </h1>
            <p className="font-barlow leading-[1.65] text-blue-light md:text-lg">
              Let&apos;s face it; if you want go space, you might as well
              genuinely got to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we&apos;ll give you a truly
              out of world experience!
            </p>
          </div>
          <Link
            to="/destination"
            className="mx-auto my-16 flex size-[144px] items-center justify-center rounded-full bg-white font-bellefair text-blue-dark outline outline-[50px] outline-transparent transition-[outline-color] duration-300 hover:outline-white/10 md:my-24 md:size-[230px] md:outline-[70px] lg:m-0"
          >
            <button className="text-[18px] md:text-3xl">EXPLORE</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
