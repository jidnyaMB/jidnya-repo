import React from "react";

export default function Bio({ description }) {
  if (!description) return null;

  return (
    <div className="bio">
      <h3>About</h3>
      <p>{description}</p>
    </div>
  )
}
