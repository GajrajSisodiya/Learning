import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo'
import { Provider } from 'react-redux';
import {Switch, Route} from "react-router-dom";
import store from './store';
import Navbar from './components/Navbar';
import ShowTodo from './components/ShowTodo';
import DeleteData from './components/DeleteData';
// import Todo from './components/Todo';
function App() {

return (
    <Provider store={store}>
    <div className="App">
      <Navbar />
      <Switch>
        {/* <Route exact path="/Home" component={}></Route> */}
        <Route exact path="/" component={Todo}></Route>
        <Route exact path="/ShowTodo" component={ShowTodo}></Route>
        <Route exact path="/DeleteData" component={DeleteData}></Route>
      </Switch>
      </div>
    </Provider>
  );
}
export default App;