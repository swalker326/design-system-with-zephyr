import React, { Suspense } from "react";

const RemoteButton = React.lazy(() =>
  import("designSystem/button").then((m) => ({ default: m.Button }))
);

function App() {
  return (
    <div className="App">
      <h1>Design System</h1>
      <Suspense fallback={<div>Loading Button...</div>}>
        <RemoteButton>Click </RemoteButton>
      </Suspense>
    </div>
  );
}

export default App;
