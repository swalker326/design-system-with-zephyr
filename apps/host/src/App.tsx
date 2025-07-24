import { Button, Skeleton } from "designSystem/components";

function App() {
  return (
    <div className="App">
      <button>A regular button</button>
      <h1>Design System</h1>
      <Button>An imported theme button </Button>
      <h2>Skeleton Loading States</h2>
      <div
        className="zephyr-design-system"
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <Skeleton className="h-12 w-12 rounded-full" />
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}

export default App;
