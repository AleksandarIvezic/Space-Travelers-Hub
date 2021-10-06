import getRockets from '../../helpers/getRockets';

const LOAD = 'space-travelers-hub/rockets/LOAD';
const RESERVE = 'space-travelers-hub/rockets/RESERVE';
const UNRESERVE = 'space-travelers-hub/rockets/UNRESERVE';
const initialState = [];

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        rockets: action.payload,
      };
    case RESERVE:
      return {
        ...state,
        rockets: state.rockets.map((rocket) => (
          (rocket.id === action.payload) ? {
            ...rocket, reserved: true,
          } : {
            ...rocket,
          }
        )),
      };
    case UNRESERVE:
      return {
        ...state,
        rockets: state.rockets.map((rocket) => (
          (rocket.id === action.payload) ? {
            ...rocket, reserved: false,
          } : {
            ...rocket,
          }
        )),
      };
    default:
      return state;
  }
};

const loadRockets = (payload) => (
  {
    type: LOAD,
    payload,
  }
);

const loadRocketsThunk = () => async (dispatch) => {
  const rockets = await getRockets();
  if (rockets) dispatch(loadRockets(rockets));
};

const reserveRocket = (payload) => (
  {
    type: RESERVE,
    payload,
  }
);

const unreserveRocket = (payload) => (
  {
    type: UNRESERVE,
    payload,
  }
);

export {
  rocketsReducer, loadRocketsThunk, reserveRocket, unreserveRocket,
};
