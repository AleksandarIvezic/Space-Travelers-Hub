import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from './Rocket';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketsReducer.rockets);
  return (
    <div>
      <ul>
        {rockets
          && rockets.map((rocket) => (
            <Rocket
              key={rocket.id}
              name={rocket.name}
              image={rocket.flickr_images[0]}
              description={rocket.description}
              id={rocket.id}
            />
          ))}
      </ul>
    </div>
  );
};

export default Rockets;
