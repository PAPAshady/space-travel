import { useState } from 'react';
import { technologies } from '../../data';
import './Technology.css';

export default function Technology() {
  const [currentTechId, setCurrentTechId] = useState(technologies[0].id);

  return (
    <div
      id="tech-wrapper"
      className="flex min-h-[100dvh] w-full items-center bg-cover bg-center bg-no-repeat pt-[100px] md:pt-[150px] lg:pt-[180px]"
    >
      <div className="pb-4 text-white lg:container lg:pb-16">
        <div className="container lg:!m-0 lg:!w-full lg:!max-w-none">
          <p className="mb-16 text-center font-barlow tracking-widest text-white sm:text-lg lg:mb-20">
            SPACE LAUNCH VEHICLE
          </p>
        </div>

        <div className="relative lg:mx-auto lg:w-[90%]">
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className={`w-full flex-row-reverse items-center gap-8 transition-all duration-500 lg:flex ${tech.id === currentTechId ? 'visible opacity-100' : 'invisible absolute top-0 opacity-0'}`}
            >
              <picture className="w-full lg:flex-1">
                <source
                  srcSet={tech.images.portrait}
                  media="(min-width:1024px)"
                />
                <img
                  className="h-[55dvw] w-full xs:h-[50dvw] lg:h-auto"
                  src={tech.images.landscape}
                  alt={tech.name}
                />
              </picture>
              <div className="container mt-10 sm:!max-w-[550px] md:!max-w-[640px] lg:m-0 lg:flex lg:!w-full lg:!max-w-none lg:flex-[1.3] lg:items-center lg:gap-8 xl:gap-12">
                <div className="flex items-center justify-center gap-4 sm:gap-6 lg:flex-col">
                  {technologies.map((tech, index) => (
                    <button
                      className={`flex size-[40px] items-center justify-center rounded-full border font-bellefair text-lg transition-colors duration-300 hover:border-white hover:bg-white hover:text-blue-dark sm:size-[56px] sm:text-2xl ${tech.id === currentTechId ? 'border-white bg-white text-blue-dark' : 'border-neutral-500 bg-transparent text-white'}`}
                      key={tech.id}
                      onClick={() => setCurrentTechId(tech.id)}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
                <div className="my-8 flex flex-col gap-4 text-center font-bellefair sm:my-12 sm:gap-6 lg:m-0 lg:gap-8 lg:text-start">
                  <p className="text-lg text-neutral-400 sm:text-2xl xl:text-3xl">
                    THE TERMINOLOGY…
                  </p>
                  <p className="text-2xl sm:text-[40px] xl:text-[56px]">
                    {tech.name.toUpperCase()}
                  </p>
                  <p className="mx-auto h-[217px] max-w-[304px] font-barlow leading-[1.7] text-blue-light min-[420px]:h-[163px] min-[420px]:max-w-[400px] xs:h-[136px] xs:max-w-[456px] sm:h-[110px] sm:max-w-none md:h-[110px] lg:h-[168px] lg:max-w-[388px] lg:text-lg min-[1150px]:max-w-[449px] xl:h-[140px] xl:max-w-[496px] min-[1400px]:max-w-[540px]">
                    {tech.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
