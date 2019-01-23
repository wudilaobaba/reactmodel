import * as actionTypes from './constants'
import {
  fromJS
} from 'immutable'

//将不需要导出但其他actionCreater方法会使用的放在顶部：
export const changeTitle = (value) => ({
  type: actionTypes.CHANGE_TITLE,
  value: fromJS(value)
})
export const changeTitleTop = (value) => ({
  type: actionTypes.CHANGE_TITLETOP,
  value: fromJS(value)
})
