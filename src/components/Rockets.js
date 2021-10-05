import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from './Rocket';
import '../style/Rocket.css';

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
              reserved={rocket.reserved}
            />
          ))}
      </ul>
    </div>
  );
};

export default Rockets;
