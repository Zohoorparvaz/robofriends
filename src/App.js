import React, { useState, useEffect } from "react";
import Cardlist from "./components/Cardlist"
// import { robots } from "./DB/robots"
import Searchbox from "./components/Searchbox"
import Scroll from "./components/Scroll"


const App = () => {
  const [data, setData] = useState([])
  const [robot, setRobot] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())
      setData(result)
    }
    fetchData()
  }, [])

  const onSearch = (e) => {
    setRobot(e.target.value);
  }
  let filteredRobots = data.filter(bot => {
    return bot.name.toLowerCase().includes(robot.toLowerCase())
  });
  return (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <Searchbox onSearch={onSearch} />
      <Scroll>
        <Cardlist robots={filteredRobots} />
      </Scroll>
    </div>
  );
}

export default App;
