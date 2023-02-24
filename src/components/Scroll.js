import React from "react";

const Scroll = (props) => {
  return (
    <div style={{ overflowY: "scroll", border: "1px solid aqua", height: 800 }}>
      {props.children}
    </div>
  );
}

export default Scroll;
