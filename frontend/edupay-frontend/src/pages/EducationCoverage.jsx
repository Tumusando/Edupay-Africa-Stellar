import React from "react";

const educationLevels = [
  "Nursery / Early Childhood Education",
  "Primary Education",
  "Lower Secondary Education",
  "Upper Secondary Education",
  "Technical & Vocational Education (TVET)",
  "Colleges & Professional Institutes",
  "Undergraduate Degree Programs",
  "Postgraduate Education (Master’s Degrees)",
  "Doctoral Education (PhD & Professional Doctorates)",
  "Online & Distance Learning",
  "Lifelong Learning & Skills Development",
  "Driving School",
];

const EducationCoverage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Education Coverage</h1>
      <p>
        Explore the educational levels supported by EduPay Africa.
      </p>

      <ul style={listStyle}>
        {educationLevels.map((level, index) => (
          <li key={index} style={itemStyle}>
            {level}
          </li>
        ))}
      </ul>
    </div>
  );
};

const listStyle = {
  marginTop: "20px",
  padding: 0,
  listStyle: "none",
};

const itemStyle = {
  padding: "12px",
  marginBottom: "10px",
  border: "1px solid #ddd",
  borderRadius: "6px",
  backgroundColor: "#f9f9f9",
};

export default EducationCoverage;