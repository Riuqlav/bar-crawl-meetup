import Todo from "./Components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Phase 1: Watch react tutorial" />
      <Todo text="Phase 2: ...?" />
      <Todo text="Phase 3: Profit!" />
    </div>
  );
}

export default App;
