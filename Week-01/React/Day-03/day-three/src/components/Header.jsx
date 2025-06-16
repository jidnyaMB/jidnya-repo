import React from "react";

export default function Header({ name = "Unknown", title = "Developer", avatar }) {
  return (
    <div className="header">
      {avatar && <img src={avatar} alt={`${name}'s avatar`} />}
      <h2>{name}</h2>
      <p>{title}</p>
    </div>
  )
}
