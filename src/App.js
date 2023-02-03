import './App.css';
import TodoList from './component/Todo/TodoList';
import Todo from './component/Todo/Todo';
import store from './redux/store';
import { Provider } from 'react-redux';
import Bycylelist from './component/bycyle/Bycylelist';
import { Route, Routes } from 'react-router-dom';
import BycycleEdit from './component/bycyle/BycycleEdit';

function App() {
  return (
    <Provider store={store}>
      <Routes >
        <Route path='/todo' element={<Todo />} />
        <Route path='/todolist' element={<TodoList />} />
        <Route path='/' element={<Bycylelist />} />
        <Route path='/bycyle/:id' element={<BycycleEdit />} />
      </Routes >
    </Provider>
  );
}

export default App;
