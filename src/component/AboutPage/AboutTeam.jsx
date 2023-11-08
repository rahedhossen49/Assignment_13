import React from "react";

function AboutTeam() {
  const teamMembers = [
    { name: "Rahed Hossen", role: "Developer" }
   
  ];

  return (
    <div className="about-team">
      <h2>Our Team</h2>
      <ul>
        {teamMembers.map((member, index) => (
          <li key={index}>
            <strong>{member.name}</strong> - {member.role}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AboutTeam;
