import React from "react";
import Header from "./Header";
import Skills from "./Skills";
import Contact from "./Contact";
import Bio from "./Bio";

export default function ProfileCard({ user }) {
  return (
    <div className="profile-card">
      <Header name={user.name} title={user.title} avatar={user.avatar} />
      <Bio description={user.bio} />
      <Skills skills={user.skills} />
      <Contact email={user.email} social={user.social} />
    </div>
  )
}
