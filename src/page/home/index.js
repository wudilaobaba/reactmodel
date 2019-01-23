import React, {
  PureComponent
} from 'react'
import {
  connect
} from 'react-redux'
import {Link} from 'react-router-dom'
import {
  HomeWraper,
  PicWraper
} from './style'
import HomeTop from "./components/HomeTop"

import {
  actionCreators
} from './store'
class Home extends PureComponent {

  render() {
    const {
      title,
      changeTitle,
      dataList
    } = this.props
    return (
      <HomeWraper>
        <HomeTop/>
        <h1 onClick={changeTitle}>点击---{title}</h1>
        <PicWraper
          className="pic"
          imgUrl="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547652648388&di=8a5a87b078c8878acd8835083c9e5b66&imgtype=0&src=http%3A%2F%2Fimgsports.eastday.com%2Fsports%2Fimg%2F201704241135279902.jpeg">
          111
        </PicWraper>
        {dataList.map((item,index)=>{
          return <Link to={`/detail/${item.get("id")}`} key={index}>{item.get("value")}</Link>
        })}
      </HomeWraper>
    )
  }
}

const mapStateToProps = (state) => { //参数state是store中的数据，将state映射到组件的props里面
  return {
    title: state.get('home').get('title'), //将state.inputValue映射到组件的props的inputValue里面
    dataList: state.get('home').get('dataList')
  }
}

//将store.dispatch方法挂载到props上
const mapDispatchToProps = (dispatch) => { //修改数据的方法, 参数dispatch就是store.dispatch
  return {
    changeTitle() {
      dispatch(actionCreators.changeTitle("new Title"))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
