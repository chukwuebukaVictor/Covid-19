import axios from 'axios';

// Actions
const FETCH_COUNTRIES_REQUEST = 'FETCH_MISSIONS_REQUEST';
const FETCH_COUNTRIES_SUCCESS = 'FETCH_MISSIONS_SUCCESS';
const FETCH_COUNTRIES_FAILURE = 'FETCH_MISSIONS_FAILURE';

const initialState = [];

export const fetchCountriesList = () => async (dispatch) => {
  dispatch({
    type: FETCH_COUNTRIES_REQUEST,
  });
  try {
    // const date = new Date().toLocaleDateString('en-CA', {year: 'numeric', month: '2-digit', day: '2-digit'})
    // https:api.covid19tracking.narrativa.com/api/${date}
    const response = await axios.get(`https://api.covid19api.com/summary`);
    const countries = response.data.Countries;
    const africanCountries = ['Nigeria','Ghana','Ethiopia','Gambia','Egypt', 'Algeria', 'Uganda', 'Namibia', 'Burundi', 'Sierra Leone', 'Zimbabwe', 'South Africa', 'Morocco', 'Tunisia', 'Zambia','Kenya', 'Senegal', 'Cameroon', 'Rwanda', 'Chad']
    const payload = [];
    for (let i = 0; i < countries.length; i += 1) {
      if (africanCountries.indexOf(countries[i].Country) !== -1) {
        payload.push({
          ID: countries[i].ID,
          CountryName: countries[i].Country,
          Date: countries[i].Date.split('T')[0],
          TotalConfirmed: countries[i].TotalConfirmed,
          NewConfirmed: countries[i].NewConfirmed,
          NewRecovered: countries[i].NewRecovered,
          TotalDeath: countries[i].TotalDeaths,
          NewDeath: countries[i].NewDeaths,
        });
      }
    }
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

const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case FETCH_COUNTRIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case FETCH_COUNTRIES_FAILURE:
      return {
        ...state,
        data: [],
        loading: false,
        error: action.payload,
      };

  default: return state;
   }
 };

export default reducer;
