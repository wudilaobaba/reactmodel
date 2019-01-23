import React, {
  Fragment,
  PureComponent
} from 'react'
import {
  connect
} from 'react-redux'

import {
  actionCreators
} from '../store'
class Home extends PureComponent {
  render() {
    const {
      changeTitleTop,
      topTitle
    } = this.props
    return (
      <Fragment>
        <h1 onClick={changeTitleTop}>点击---{topTitle}</h1>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => { //参数state是store中的数据，将state映射到组件的props里面
  return {
    topTitle: state.get('home').get('topTitle'), //将state.inputValue映射到组件的props的inputValue里面
  }
}

//将store.dispatch方法挂载到props上
const mapDispatchToProps = (dispatch) => { //修改数据的方法, 参数dispatch就是store.dispatch
  return {
    changeTitleTop() {
      dispatch(actionCreators.changeTitleTop("new Title Top"))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
