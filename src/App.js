import './App.css';
import TodoList from './component/Todo/TodoList';
import Todo from './component/Todo/Todo';
import store from './redux/store';
import { Provider } from 'react-redux';
import Bycylelist from './component/bycyle/Bycylelist';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Todo />
        <TodoList />
        <Bycylelist />
      </div>
    </Provider>
  );
}

export default App;
