import "./App.css";
import ListTasks from "./Components/ListTasks";
import Add from "./Components/Add";

function App() {
    return (
        <div className="App">
            <h1>Hello from to do list</h1>
            <Add />
            <ListTasks />
        </div>
    );
}

export default App;
