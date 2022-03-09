import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import TaskAdder from './components/TaskAdder';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <Header/>
      <TaskAdder/>
      <TaskList/>
    </div>
  );
}

export default App;
