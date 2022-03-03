import './App.css';
// Aufgabe 1
import ButtonRow from './components/ButtonRow';
import SuperButton from './components/SuperButton';
// Aufgabe 2
import Button from './componentsAufgabe/Button';
import Card from './componentsAufgabe/Card';
import List from './componentsAufgabe/List';
// Aufgabe 3
import Vote from './propertiesTask/Vote';

function App() {
  return (
    <div className="App">
      <h1 class="heading">Properties</h1>
      <Vote candidate="Deniz" location="Hard"/>
      <Vote candidate="Hamid" location="Bregenz"/>
      <Vote candidate="Döner" location="Dornbirn"/>
    </div>
  );
}

export default App;
