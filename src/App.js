import React from "react";
import Cardlist from "./components/Cardlist"
import { robots } from "./DB/robots"


const App = () => {

  return (
    <Cardlist robots={robots} />
  );
}

export default App;
