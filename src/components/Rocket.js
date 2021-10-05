import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { reserveRocket } from '../redux/rockets/rockets';

const Rocket = ({
  id, name, image, description, reserved,
}) => {
  const dispatch = useDispatch();
  const toggleReservation = () => (reserved ? 'Cancel Reservation' : 'Reserve Rocket');
  const handleClick = (e) => {
    dispatch(reserveRocket(id));
    e.target.innerText = toggleReservation();
    e.target.className = ' btn-reserved';
  };

  return (
    <li className="d-flex m-2 p-2">
      <div className="image mx-2">
        <img src={image} alt="rocket-img" width="250" height="180" />
      </div>
      <div className="text">
        <h3>{name}</h3>
        <p>{description}</p>
        <Button type="button" className="btn btn-primary" onClick={handleClick}>{toggleReservation()}</Button>
      </div>
    </li>
  );
};

export default Rocket;

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool,
};

Rocket.defaultProps = {
  reserved: false,
};
