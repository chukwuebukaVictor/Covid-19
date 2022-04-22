import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './covidData/countriesCovidData'

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
// import { applyMiddleware, combineReducers, createStore } from 'redux';
// import thunk from 'redux-thunk';
// import rocketReducer from './rockets/rockets';
// import missionsReducer from './missions/missions';

// const rootReducer = combineReducers({
//   rocket: rocketReducer,
//   missions: missionsReducer,
// });

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;