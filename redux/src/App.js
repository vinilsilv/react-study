import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h1>React Redux</h1>
      <div className='line'>
        <Card title="Card 1" red>X</Card>
        <Card title="Card 2" green>Y</Card>
      </div>
      <div className='line'>
        <Card title="Card 3" blue>Y</Card>
        <Card title="Card 4" purple>Y</Card>
      </div>
    </div>
  );
}

export default App;
