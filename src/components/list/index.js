import React, {
  Fragment,
  PureComponent
} from 'react'
import {
  connect
} from 'react-redux'
import {
  Li,
} from './style'

import {
  actionCreators
} from './store'
class List extends PureComponent {
  
  render() {
    const {
      listData,
      del,
      getListData
    } = this.props
    return (
      <Fragment>
        <button onClick={getListData}>getList</button>
        <ul>
          {listData.map((item,index)=>(
            <Li key={index} onClick={()=>{del(item.get("id"))}}>{item.get("value")}</Li>
          ))}
        </ul>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => { //参数state是store中的数据，将state映射到组件的props里面
  return {
    listData: state.get('list').get('listData'), //将state.inputValue映射到组件的props的inputValue里面
  }
}

//将store.dispatch方法挂载到props上
const mapDispatchToProps = (dispatch) => { //修改数据的方法, 参数dispatch就是store.dispatch
  return {
    del(id) {
      dispatch(actionCreators.del(id))
    },
    getListData(){
      dispatch(actionCreators.getList())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(List)
