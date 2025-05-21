'use client';
import { useEffect, useState } from 'react';
import NavBar from '../(components)/NavBar';

export default function Display() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/data')
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div>
      <NavBar />
      <h1 className="text-2xl font-bold mb-4">Submitted Data</h1>
      <div className="space-y-4">
        {data.map((entry: any, idx: number) => (
          <div key={idx} className="border p-4 rounded bg-gray-50">
            <p><strong>Name:</strong> {entry.fullName}</p>
            <p><strong>Email:</strong> {entry.email}</p>
            <p><strong>Age:</strong> {entry.age}</p>
            <p><strong>Gender:</strong> {entry.gender}</p>
            <p><strong>Feedback:</strong> {entry.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
}