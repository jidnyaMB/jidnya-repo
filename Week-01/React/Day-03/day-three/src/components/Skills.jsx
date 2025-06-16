import React from "react";

export default function Skills({ skills = [] }) {
  if (skills.length === 0) return null;

  return (
    <div className="skills">
      <h3>Skills</h3>
      <ul>
        {skills.map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}
