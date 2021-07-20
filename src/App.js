import './App.css';
import AddItem from './components/AddItem';
import Todo from './components/Todo';
import Completed from './components/Completed'

function App() {
  return (
    <>
      <AddItem/>
      <Todo/>
      <Completed/>
    </>
  );
}

export default App;
