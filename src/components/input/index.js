import React, {
  Fragment,
  PureComponent
} from 'react'
import {
  connect
} from 'react-redux'
import {
  InputWraper,
  Button,
} from './style'

import {
  actionCreators
} from './store'
class Input extends PureComponent {

  render() {
    const {
      value,
      changeVal,
      transDom,
      showDom
    } = this.props
    return (
      <Fragment>
        <InputWraper>
          <input
            className="input"
            type="text"
            value={value}
            onChange={changeVal}
          />
        </InputWraper>
        <Button onClick={()=>{transDom(this.spanIn)}}>点击传DOM</Button>
        <div
          ref={(icon)=>{this.spanIn=icon}}
          onClick={()=>{showDom(this.spanIn)}}
        >
          点击传DOM
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => { //参数state是store中的数据，将state映射到组件的props里面
  return {
    value: state.get('input').get('value'), //将state.inputValue映射到组件的props的inputValue里面
  }
}

//将store.dispatch方法挂载到props上
const mapDispatchToProps = (dispatch) => { //修改数据的方法, 参数dispatch就是store.dispatch
  return {
    changeVal(e) {
      dispatch(actionCreators.changeVal(e.target.value))
    },
    transDom(dom){
      console.log(dom);
    },
    showDom(dom){
      console.log(dom);
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Input)
