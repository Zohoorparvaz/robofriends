import React from "react";
import Cardlist from "./components/Cardlist"
import { robots } from "./DB/robots"
import Searchbox from "./components/Searchbox"


const App = () => {

  return (
    <div className="tc">
      <h1>RoboFriends</h1>
      <Searchbox />
      <Cardlist robots={robots} />
    </div>
  );
}

export default App;
