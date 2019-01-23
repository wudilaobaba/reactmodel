import React, {
  Component
} from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './page/home'
import Detail from './page/detail'
import TodoList from "./page/todoList"
import {
  Provider
} from 'react-redux'
import store from './store'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodoList/>
        <div>
          <BrowserRouter>
            <div>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/detail/:id" component={Detail}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}
export default App;
