import axios from 'axios';

// Actions
const FETCH_COUNTRIES_REQUEST = 'FETCH_MISSIONS_REQUEST';
const FETCH_COUNTRIES_SUCCESS = 'FETCH_MISSIONS_SUCCESS';
const FETCH_COUNTRIES_FAILURE = 'FETCH_MISSIONS_FAILURE';
// const TOGGLE_TRUE = 'TOGGLE_TRUE';
// const TOGGLE_FALSE = 'TOGGLE_FALSE';

const initialState = [];

export const fetchCountriesList = () => async (dispatch) => {
  dispatch({
    type: FETCH_COUNTRIES_REQUEST,
  });
  try {
    const date = new Date().toLocaleDateString('en-CA', {year: 'numeric', month: '2-digit', day: '2-digit'})
    const response = await axios.get(`https://api.covid19tracking.narrativa.com/api/${date}`);
    const result = response.data;
    console.log('from countries.js')
    const payload = result.map((country) => ({
      country: country.countries
    }));
    dispatch({
      type: FETCH_COUNTRIES_SUCCESS,
      payload,
    });
  } catch (error) {
    dispatch({
      type: FETCH_COUNTRIES_FAILURE,
      payload: error.message,
    });
  }
};

// export const toggleMissionsTrue = (id) => (
//   {
//     type: TOGGLE_TRUE,
//     id,
//   }
// );

// export const toggleMissionsFalse = (id) => (
//   {
//     type: TOGGLE_FALSE,
//     id,
//   }
// );

// Reducers

const countriesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_COUNTRIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: action.payload,
        loading: false,
      };
    case FETCH_COUNTRIES_FAILURE:
      return {
        ...state,
        countries: [],
        loading: false,
        error: action.payload,
      };

//     case TOGGLE_TRUE:
//       return {
//         ...state,
//         missions: state.missions.map((i) => {
//           if (i.id !== action.id) return i;
//           return { ...i, reserved: true };
//         }),
//       };

//     case TOGGLE_FALSE:
//       return {
//         ...state,
//         missions: state.missions.map((i) => {
//           if (i.id !== action.id) return i;
//           return { ...i, reserved: false };
//         }),
//       };

  default: return state;
   }
 };

export default countriesReducer;
