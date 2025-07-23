import React, { useState, Suspense } from "react";

const Button = React.lazy(() =>
  //@ts-expect-error
  import("designSystem/button").then((m) => ({ default: m.Button }))
);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Button />
      {/* </Suspense> */}
    </div>
  );
}

export default App;
