import { useState } from 'react';
import { destinations as locations } from '../../data';
import './Destination.css';

export default function Destination() {
  const [destinations, setDestinations] = useState(locations);
  const [currentDestination, setCurrentDestination] = useState(destinations[0]);

  return (
    <div
      id="destination-wrapper"
      className="min-h-[100dvh] w-full bg-cover bg-center bg-no-repeat pt-[100px] md:pt-[150px]"
    >
      <div className="container">
        <p className="text-center font-barlow tracking-widest text-white">
          PICK YOUR DESTINATION
        </p>

        <div className="flex flex-col">
          <div className="relative mb-[80%] flex justify-center pt-12">
            {destinations.map(({ id, name, image }) => (
              <img
                className={`absolute size-[180px] transition-all duration-500 sm:size-[300px] lg:size-[480px] ${currentDestination.name === name ? 'visible opacity-100' : 'invisible opacity-0'}`}
                src={image}
                alt={name}
                key={id}
              />
            ))}
          </div>

          <div>
            <div className="flex items-center justify-center gap-8">
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

            <div className="relative mb-20 mt-8 flex justify-center font-bellefair text-6xl text-white lg:text-[96px]">
              {destinations.map((destination) => (
                <p
                  className={`absolute transition-all duration-500 ${currentDestination.name === destination.name ? 'visible opacity-100' : 'invisible opacity-0'}`}
                  key={destination.id}
                >
                  {destination.name.toUpperCase()}
                </p>
              ))}
            </div>
            <div className="relative mb-8 flex justify-center px-3 pb-40">
              {destinations.map((destination) => (
                <p
                  className={`absolute pb-6 text-center font-barlow leading-[1.7] text-blue-light transition-all duration-500 ${destination.name === currentDestination.name ? 'visible opacity-100' : 'invisible opacity-0'}`}
                  key={destination.id}
                >
                  {destination.description}
                </p>
              ))}
            </div>
            <div className="px-3 pb-52">
              <div className="relative flex justify-center gap-7 border-t border-neutral-600 pt-7 text-center">
                {destinations.map((destination) => (
                  <div
                    className={`absolute flex flex-col gap-7 transition-all duration-500 ${destination.id === currentDestination.id ? 'visible opacity-100' : 'invisible opacity-0'}`}
                    key={destination.id}
                  >
                    <div>
                      <p className="mb-3 font-barlow text-blue-light">
                        AVG. DISTANCE
                      </p>
                      <p className="font-bellefair text-3xl text-white">
                        {destination.distance.toUpperCase()}
                      </p>
                    </div>
                    <div>
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
