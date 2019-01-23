import * as actionTypes from './constants'
import {
  fromJS
} from 'immutable'

//将不需要导出但其他actionCreater方法会使用的放在顶部：
export const changeVal = (value) => ({
  type: actionTypes.CHANGE_VALUE,
  value: fromJS(value)
})
