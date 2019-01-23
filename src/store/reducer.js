import {
  combineReducers
} from 'redux-immutable'

import {
  reducer as inputReducer
} from '../components/input/store'

import {
  reducer as listReducer
} from '../components/list/store'

import {
  reducer as homeReducer
} from '../page/home/store'

export default combineReducers({
  input: inputReducer,
  list: listReducer,
  home: homeReducer
})
