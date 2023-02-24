import React, { useState } from "react";
import Cardlist from "./components/Cardlist"
import { robots } from "./DB/robots"
import Searchbox from "./components/Searchbox"


const App = () => {
  const [robot, setRobot] = useState("");
  const onSearch = (e) => {
    setRobot(e.target.value);
  }
  let filteredRobots = robots.filter(bot => {
    return bot.name.toLowerCase().includes(robot.toLowerCase())
  });
  return (
    <div className="tc">
      <h1>RoboFriends</h1>
      <Searchbox onSearch={onSearch} />
      <Cardlist robots={filteredRobots} />
    </div>
  );
}

export default App;
