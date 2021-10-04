import fetchMissions from '../../helpers/fetchMissions';

const GET_MISSIONS = 'missionStore/missions/GET_MISSIONS';

const initialState = [];

export const getMissions = () => async (dispatch) => {
  const missions = await fetchMissions()
  dispatch({type: GET_MISSIONS, missions,})
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return {
        ...state,
        missions: action.missions,
      };

    default:
      return state;
  }
};

export default reducer;
