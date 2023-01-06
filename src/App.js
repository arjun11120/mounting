import React,{useMemo} from "react";
import Welcome from './welcome'

function App() {
  const memoWelcome = useMemo(() => (<Welcome/>), []);
  console.log('app load');
  return (

    <div className="App">
        {memoWelcome}
    </div>
  );
}

export default App;
