import fetchMissions from '../../helpers/fetchMissions';

const GET_MISSIONS = 'space-travelers-hub/missions/GET_MISSIONS';
const JOIN_MISSION = 'space-travelers-hub/missions/JOIN_MISSION';

const initialState = [];

export const getMissions = () => async (dispatch) => {
  const missions = await fetchMissions();
  dispatch({
    type: GET_MISSIONS, missions,
  });
};

export const joinMission = (payload) => {
  return { type: JOIN_MISSION, id: payload }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return {
        ...state,
        missions: action.missions,
      };
    case JOIN_MISSION:
      return {
        ...state,
        missions: state.missions.map((mission) => {
          if (mission.mission_id !== action.id) {
            return { ...mission }
          }
          return { ...mission, reserved: true }
        })
      }
    default:
      return state;
  }
};

export default reducer;
