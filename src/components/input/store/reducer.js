import * as actionTypes from './constants'
import {
  fromJS
} from 'immutable'
const defaultState = fromJS({
  value: "",
})

//reducer可以接收state但是绝对不能修改state
export default (state = defaultState, action) => {
  //一旦store.dispatch(action)的时候，就会执行这里的逻辑
  switch (action.type) {
    case actionTypes.CHANGE_VALUE:
      return state.merge({
        'value': action.value
      });
    default:
      return state
  }
}
