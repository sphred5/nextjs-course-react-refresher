import Todo from "./components/Todo";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";

function App() {
  return (
    <div className="App">
      <h1>My Todos</h1>
      <Todo
        title="hello"
        action="Delete"
      />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
