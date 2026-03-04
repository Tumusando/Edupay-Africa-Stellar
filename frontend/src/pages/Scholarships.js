import React, { useEffect, useState } from 'react';
import { getScholarships } from '../services/scholarshipService';

const Scholarships = () => {
  const [scholarships, setScholarships] = useState([]);

  useEffect(() => {
    getScholarships().then(data => setScholarships(data));
  }, []);

  return (
    <div>
      <h2>Scholarships</h2>
      {scholarships.length === 0 ? (
        <p>No scholarships yet</p>
      ) : (
        scholarships.map(s => <div key={s.id}>{s.name} - {s.status}</div>)
      )}
    </div>
  );
};

export default Scholarships;