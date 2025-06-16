import React from "react";
import Bio from "./components/Bio";
import Header from "./components/Header";
import Contact from "./components/Contact";
import ProfileCard from "./components/ProfileCard";
import Skills from "./components/Skills";
import "./App.css";

function App() {
  const users = [
    {
      name: "Alice Johnson",
      title: "Full Stack Developer",
      bio: "Developer with 5 years of experience in JavaScript and React.",
      skills: ["JavaScript", "React", "Node.js"],
      email: "alice@example.com",
      social: { twitter: "@alice", linkedin: "/in/alice" }
    },
    {
      name: "Mike Peterson",
      title: "UI/UX Designer",
      skills: ["Design", "Photoshop"],
      email: "mike@example.com",
      social: { twitter: "@mike" }
    },
    {
      name: "Charlie Brown",
      title: "Junior Developer",
      skills: ["Design", "Photoshop"],
      email: "mike@example.com",
      social: { twitter: "@mike" }
      
    }
  ];

  return (
    <div className="profiles">
      {users.map((user, idx) => (
        <ProfileCard key={idx} user={user} />
      ))}
    </div>
  )
}

export default App;
