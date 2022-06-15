import Todo from "./components/Todo";

function App() {
  
  return (
    <div className="App">
      <h1>My Todos</h1>
      <Todo
        title="hello"
        action="Delete"
      /> 
    </div>
  );
}

export default App;
