import './App.css';
import ClassCounter from './components/UI/ClassCounter';
import MyButton from './components/UI/button/MyButton.js';

function App() {
  return (
    <div className="app">
      
      <MyButton />
      <hr></hr>

      <ClassCounter/>
      <hr></hr>
      <MyButton />
    </div>
  );
}

export default App;
