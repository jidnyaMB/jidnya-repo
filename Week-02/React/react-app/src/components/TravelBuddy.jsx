import React, { useState } from "react";

function TravelBuddy() {
  const [formData, setFormData] = useState({ 
    fullName: "", 
    email: "", 
    contact: "", 
    age: "",
    gender: "",
    destination: "",
    dept: "",
    duration: "",
    people: "",
    type: "",
    comments: ""
  });

  
  const [submissions, setSubmissions] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    
    setSubmissions([...submissions, formData]);

    
    setFormData({ fullName: "", email: "", contact: "", age: "", gender: "", destination: "", dept: "", duration: "", people: "", type: "", comments: ""});


  };

  return (
    <div style={{ padding: "20px", fontFamily:'Arial,sans-serif' }}>
      <h1>Travel Buddy Signup Form</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom:'20px' }}>
        <input
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        /><br /><br />
        <input
          name="email"
          placeholder="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        /><br /><br />
        <input
          name="contact"
          placeholder="Contact Number"
          value={formData.contact}
          onChange={handleChange}
          required
        /><br /><br />
        <input
          name="age"
          placeholder="Age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          required
        /><br /><br />
        <input
          name="gender"
          placeholder="Gender"
          value={formData.gender}
          onChange={handleChange}
          required
        /><br /><br />
        <input
          name="destination"
          placeholder="destination"
          value={formData.destination}
          onChange={handleChange}
          required
        /><br /><br />
        <input
          name="dept"
          placeholder="destination"
          value={formData.destination}
          onChange={handleChange}
          required
        /><br /><br />
        <button type="submit">Submit</button>
      </form>

      <div style={{ display:'flex', gap:'20px', flexWrap:'wrap' }}>
        {submissions.map((item, index) => (
          <div key={index} style={{border:'1px solid #ccc', padding:'20px', borderRadius:'10px', width:'200px', boxShadow:'0 0 5px #0003'}}>
            <h3>{item.fullName}</h3>
            <p>Email: {item.email}</p>
            <p>Contact: {item.contact}</p>
            <p>Age: {item.age}</p>
            <p>Gender: {item.gender}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TravelBuddy;
