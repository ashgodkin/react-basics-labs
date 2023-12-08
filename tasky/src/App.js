import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description="Wash dishes and put away">
      </Task>
      <Task title="Laundry" deadline="Tomorrow" description="Fold laundry and put away">
      </Task>
      <Task title="Tidy" deadline="Today" description="Polish and sweep">
      </Task>
    </div>
  );
}

export default App;