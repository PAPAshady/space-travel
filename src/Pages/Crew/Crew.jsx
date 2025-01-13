import { useState } from 'react';
import { crews } from '../../data';
import './Crew.css';

export default function Crew() {
  const [currentCrewId, serCurrentCrewId] = useState(crews[0].id);

  return (
    <div
      id="crews-wrapper"
      className="flex min-h-[100dvh] w-full items-center bg-cover bg-center bg-no-repeat pt-[100px] md:pt-[150px] lg:pt-[180px]"
    >
      <div className="container sm:!max-w-[640px] lg:w-[85%] lg:!max-w-[992px] xl:!max-w-[1100px]">
        <p className="mb-10 text-center font-barlow tracking-widest text-white sm:text-lg lg:mb-28">
          MEET YOUR CREW
        </p>
        <div className="relative">
          {crews.map((crew) => (
            <div
              className={`w-full transition-all duration-500 ${crew.id === currentCrewId ? 'visible opacity-100' : 'invisible absolute top-0 opacity-0'}`}
              key={crew.id}
            >
              <div className="flex flex-col lg:flex-row lg:items-center">
                <div className="lg:flex-[1.1] xl:flex-[1.3]">
                  <div className="text-center font-bellefair lg:text-start">
                    <p className="hidd text-lg text-neutral-400 sm:text-2xl xl:text-3xl">
                      {crew.role.toUpperCase()}
                    </p>
                    <p className="mt-2 text-2xl text-white sm:mt-4 sm:text-[40px] xl:mt-8 xl:text-[56px]">
                      {crew.name.toUpperCase()}
                    </p>
                    <p className="mx-auto mt-6 h-[163px] max-w-[300px] font-barlow leading-[1.7] text-blue-light min-[420px]:h-[136px] min-[420px]:max-w-[399px] xs:h-[108px] xs:max-w-[456px] sm:h-[81px] sm:max-w-[608px] md:mt-8 md:h-[81px] md:max-w-[640px] lg:mx-0 lg:h-[108px] lg:max-w-[440px] xl:h-[108px] xl:max-w-[553px]">
                      {crew.bio}
                    </p>
                  </div>

                  <div className="mt-20 flex items-center justify-center gap-6 sm:mt-16 sm:gap-10 lg:justify-start">
                    {crews.map((crew) => (
                      <button
                        className={`size-[12px] rounded-full transition-colors duration-500 sm:size-[15px] ${crew.id === currentCrewId ? 'bg-white' : 'bg-neutral-500'}`}
                        key={crew.id}
                        onClick={() => serCurrentCrewId(crew.id)}
                      ></button>
                    ))}
                  </div>
                </div>
                <div className="relative flex justify-center px-5 pt-20 sm:pt-28 lg:flex-1 lg:p-0">
                  <img
                    className="h-[360px] xs:h-[450px] sm:h-[560px] lg:h-[500px] xl:h-[550px]"
                    src={crew.image}
                    alt={crew.name}
                  />
                  <span className="absolute bottom-0 left-0 h-[30%] w-full lg:bg-none bg-gradient-to-t from-[rgba(0,0,0,.9)]"></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
