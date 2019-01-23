import * as actionTypes from './constants'
import {
  fromJS
} from 'immutable'

//将不需要导出但其他actionCreater方法会使用的放在顶部：
const getDatas = ()=>({
  type: actionTypes.GET,
  value: fromJS([{id:111,value:111},{id:222,value:222}])
})

export const del = (value) => ({
  type: actionTypes.DEL,
  value: fromJS(value)
})

export const getList = () => {
  return (dispatch)=>{
    dispatch(getDatas())
  }
}
