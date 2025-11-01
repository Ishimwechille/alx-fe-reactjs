// src/components/UserProfile.jsx
import React from 'react';
import './UserProfile.css'; // optional if you want to style it later

const UserProfile = (props) => {
  return (
    <div className="user-profile-card">
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>{props.bio}</p>
    </div>
  );
};

export default UserProfile;
