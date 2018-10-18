import { combineReducers } from 'redux';

import auth from './auth';
import addButton from './addButton';
import addHazard from './addHazard';

//import regIncident from './regIncident';

export default combineReducers({
  auth,
  addButton,
  addHazard,
  //regIncident
});
