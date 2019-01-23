import React,{PureComponent,Fragment} from "react"
import {Link} from 'react-router-dom'
class Detail extends PureComponent{
  render(){
    return(
      <Fragment>
        <h1>详情{this.props.match.params.id}</h1>
        <Link to="/">回到首页</Link>
      </Fragment>
    )
  }
}
export default Detail
