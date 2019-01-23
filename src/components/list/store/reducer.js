import * as actionTypes from './constants'
import {
  fromJS
} from 'immutable'
const defaultState = fromJS({
  listData: [],
})

//reducer可以接收state但是绝对不能修改state
export default (state = defaultState, action) => {
  //一旦store.dispatch(action)的时候，就会执行这里的逻辑
  switch (action.type) {
    case actionTypes.DEL:
      let data = state.get("listData").toJS();
      let y = data.filter((item)=>(
        item.id!==action.value
      ))
      return state.merge({
        'listData': fromJS(y)
      });
    case actionTypes.GET:
      return state.merge({
        'listData': action.value
      });
    default:
      return state
  }
}
