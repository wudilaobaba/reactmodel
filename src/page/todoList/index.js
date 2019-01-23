import React,{Component,Fragment} from "react"
import Input from "../../components/input"
import List from "../../components/list"
class TodoList extends Component{
  render(){
    return(
      <Fragment>
        <Input/>
        <List/>
      </Fragment>
    )
  }
}
export default TodoList
