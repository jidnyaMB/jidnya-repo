import React, { useState } from "react";
import './Travel.css';

function TravelBuddy() {
  const [formData, setFormData] = useState({ 
    fullName: "", 
    email: "", 
    contact: "", 
    age: "",
    gender: "",
    destination: "",
    dept: "",
    date: "",
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

    
    setFormData({ fullName: "", email: "", contact: "", age: "", gender: "", destination: "", dept: "", duration: "", people: "", type: "", comments: "", date: ""});


  };

  return (
     <div
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}
    >
    <div className="travel-buddy-container" >
      <h1>Adventure Awaits, Sign Up Today</h1>
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
        <label>Gender: </label>
        <input
          name="gender"
          type="radio"
          id="female"
          placeholder="Gender"
          value={formData.gender}
          onChange={handleChange}
          required
        />
        <label>Female </label>
        <input
          name="gender"
          type="radio"
          id="male"
          placeholder="Gender"
          value={formData.gender}
          onChange={handleChange}
          required
        />
        <label>Male </label>
        <br /><br />
        <input
          name="destination"
          placeholder="destination"
          value={formData.destination}
          onChange={handleChange}
          required
        /><br /><br />
        <input
          name="date"
          type="date"
          placeholder="date"
          value={formData.date}
          onChange={handleChange}
          required
        /><br /><br />
        <input
          name="dept"
          placeholder="dept"
          value={formData.dept}
          onChange={handleChange}
          required
        /><br /><br />
        <input
          name="duration"
          placeholder="duration"
          value={formData.duration}
          onChange={handleChange}
          required
        /><br /><br />
        <input
          name="people"
          placeholder="people"
          value={formData.people}
          onChange={handleChange}
          required
        /><br /><br />
        <label for="type">Trip Type: </label>
        <select name="type" id="type">
          <option value="sightseeing">Sightseeing</option>
          <option value="camping">Camping</option>
           <option value="photo">Photography</option>
          <option value="adv">Adventure</option>
        </select>
        <br /><br />
        <input
          name="comments"
          placeholder="comments"
          value={formData.comments}
          onChange={handleChange}
          required
        /><br /><br />
        <button type="submit">Submit</button>
      </form>

      <div className="cards-container">
        {submissions.map((item, index) => (
          <div key={index} className="card">
            <h3>{item.fullName}</h3>
            <p>Email: {item.email}</p>
            <p>Contact: {item.contact}</p>
            <p>Age: {item.age}</p>
            <p>Gender: {item.gender}</p>
            <p>Destination: {item.destination}</p>
            <p>Date: {item.date}</p>
            <p>Departure Time: {item.dept}</p>
            <p>Duration: {item.duration}</p>
            <p>No. of People: {item.people}</p>
            <p>Trip Type: {item.type}</p>
            <p>Comments: {item.comments}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default TravelBuddy;
