import React from "react";

const Card = ({ id, name, email }) => {
  return (
    <div className="bg-red dib br3 pa3 ma3 grow bw2 shadow-5 tc">
      <img src={`https://robohash.org/${id}?200x200`} alt={`robot ${id}`} />
      <div>
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card;