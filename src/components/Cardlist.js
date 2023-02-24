import React from "react"
import Card from "./Card"

const Cardlist = ({ robots }) => {
  return (
    <div>
      {robots.map(r =>
        <Card key={r.id} id={r.id} name={r.name} email={r.email} />
      )}
    </div>
  );
}

export default Cardlist;