import getRockets from '../../helpers/getRockets';

const LOAD = 'space-travelers-hub/rockets/LOAD';
const initialState = [];

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        rockets: action.payload,
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

export {
  rocketsReducer, loadRocketsThunk,
};
