const GET_MISSIONS = 'missionStore/missions/GET_MISSIONS';

const initialState = [];

export const getMissions = (payload) => ({
  type: GET_MISSIONS, payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return {
        ...state,
        missions: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
