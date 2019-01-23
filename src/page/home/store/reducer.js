import * as actionTypes from './constants'
import {
  fromJS
} from 'immutable'
const defaultState = fromJS({
  title: "首页",
  topTitle:"头部上方",
  dataList:[
    {id:111,value:111},
    {id:222,value:222}
  ]
})

//reducer可以接收state但是绝对不能修改state
export default (state = defaultState, action) => {
  //一旦store.dispatch(action)的时候，就会执行这里的逻辑
  switch (action.type) {
    case actionTypes.CHANGE_TITLE:
      return state.merge({
        'title': action.value
      });
    case actionTypes.CHANGE_TITLETOP:
      return state.merge({
        'topTitle': action.value
      });
    default:
      return state
  }
}
