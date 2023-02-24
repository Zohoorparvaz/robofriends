import React from "react"
import Card from "./Card"

const Cardlist = ({ robots }) => {
  return (
    <div>
      <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
    </div>
  );
}

export default Cardlist;