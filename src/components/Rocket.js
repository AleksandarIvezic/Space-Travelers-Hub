import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { Badge } from 'react-bootstrap';
import { reserveRocket, unreserveRocket } from '../redux/rockets/rockets';

const Rocket = ({
  id, name, image, description, reserved,
}) => {
  const dispatch = useDispatch();

  const handleReserve = () => {
    dispatch(reserveRocket(id));
  };

  const handleUnreserve = () => {
    dispatch(unreserveRocket(id));
  };

  return (
    <li className="d-flex m-2 p-2">
      <div className="image mx-2">
        <img src={image} alt="rocket-img" width="250" height="180" />
      </div>
      <div className="text">
        {reserved && (
          <Badge className="badge bg-info">Reserved</Badge>
        )}
        <h3>{name}</h3>
        <p>{description}</p>
        {!reserved && (
          <Button type="button" onClick={handleReserve}>Reserve Rocket</Button>
        )}
        {reserved && (
          <Button type="button" className="btn btn-light btn-outline-secondary" onClick={handleUnreserve}>Cancel Reservation</Button>
        )}
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
