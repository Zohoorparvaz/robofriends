import React from "react";

const Searchbox = ({ onSearch }) => {
  return (
    <div className="pa2">
      <input className="pa3 ba b--blue bg-light-blue" type="search" placeholder="search robots" onChange={onSearch} />
    </div>
  )
}

export default Searchbox;