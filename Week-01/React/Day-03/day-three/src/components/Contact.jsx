import React from "react";

export default function Contact({ email, social = {} }) {
  if (!email && Object.keys(social).length === 0) return null;

  return (
    <div className="contact">
      <h3>Contact</h3>
      {email && <p>Email: {email}</p>}
      {social?.twitter && <p>Twitter: {social.twitter}</p>}
      {social?.linkedin && <p>LinkedIn: {social.linkedin}</p>}
    </div>
  )
}
