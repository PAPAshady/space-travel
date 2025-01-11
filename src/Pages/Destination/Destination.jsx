import { useState } from 'react';
import { destinations } from '../../data';
import './Destination.css';

export default function Destination() {
  const [currentDestination, setCurrentDestination] = useState(destinations[0]);

  return (
    <div
      id="destination-wrapper"
      className="flex min-h-[100dvh] w-full items-center bg-cover bg-center bg-no-repeat pt-[100px] md:pt-[150px] lg:pt-[180px]"
    >
      <div className="container sm:!max-w-[640px] lg:w-[85%] lg:!max-w-[1440px] lg:pb-16">
        <p className="text-center font-barlow tracking-widest text-white sm:text-lg lg:mb-20">
          PICK YOUR DESTINATION
        </p>

        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-10">
          <div className="relative flex justify-center py-12 md:py-14 lg:flex-1 lg:p-0">
            {destinations.map(({ id, name, image }) => (
              <img
                className={`size-[180px] transition-all duration-500 xs:size-[220px] sm:size-[300px] md:size-[350px] lg:size-[400px] min-[1100px]:size-[450px] ${currentDestination.name === name ? 'visible opacity-100' : 'invisible absolute opacity-0'}`}
                src={image}
                alt={name}
                key={id}
              />
            ))}
          </div>

          <div className="lg:flex-1 lg:px-4">
            <div className="flex items-center justify-center gap-8 lg:justify-start">
              {destinations.map((destination) => (
                <button
                  className={`border-b-[3px] pb-3 font-barlow transition-colors duration-500 hover:border-white/50 hover:text-white/80 ${currentDestination.name === destination.name ? 'border-white text-white' : 'border-transparent text-blue-light'}`}
                  key={destination.id}
                  onClick={() => setCurrentDestination(destination)}
                >
                  {destination.name.toUpperCase()}
                </button>
              ))}
            </div>

            <div className="relative my-8 flex justify-center font-bellefair text-6xl text-white lg:justify-start lg:text-[96px]">
              {destinations.map((destination) => (
                <p
                  className={`transition-all duration-500 ${currentDestination.name === destination.name ? 'visible opacity-100' : 'invisible absolute opacity-0'}`}
                  key={destination.id}
                >
                  {destination.name.toUpperCase()}
                </p>
              ))}
            </div>
            <div className="relative mb-4">
              {destinations.map((destination) => (
                <p
                  className={`pb-4 text-center font-barlow leading-[1.7] text-blue-light transition-all duration-500 xs:max-w-none lg:text-start lg:text-lg ${destination.name === currentDestination.name ? 'visible opacity-100' : 'invisible absolute top-0 opacity-0'}`}
                  key={destination.id}
                >
                  {destination.description}
                </p>
              ))}
            </div>
            <div className="px-3 sm:pb-4 lg:py-0">
              <div className="relative flex justify-center gap-7 border-t border-neutral-600 py-7 text-center lg:pb-0 lg:text-start">
                {destinations.map((destination) => (
                  <div
                    className={`flex flex-col gap-7 transition-all duration-500 sm:w-4/5 sm:flex-row sm:items-center sm:justify-between lg:w-full lg:justify-start ${destination.id === currentDestination.id ? 'visible opacity-100' : 'invisible absolute opacity-0'}`}
                    key={destination.id}
                  >
                    <div className="lg:flex-1">
                      <p className="mb-3 font-barlow text-blue-light">
                        AVG. DISTANCE
                      </p>
                      <p className="font-bellefair text-3xl text-white">
                        {destination.distance.toUpperCase()}
                      </p>
                    </div>
                    <div className="lg:flex-1">
                      <p className="mb-3 font-barlow text-blue-light">
                        EST. TRAVEL TIME
                      </p>
                      <p className="font-bellefair text-3xl text-white">
                        {destination.travel.toUpperCase()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
