'use client';
import { useEffect, useState } from 'react';
import NavBar from '../(components)/NavBar';

export default function Display() {
  const [data, setData] = useState([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editedData, setEditedData] = useState<any>({});

  useEffect(() => {
    fetch('https://assignment-4-ivvw.onrender.com/api/data')
      .then(res => res.json())
      .then(setData);
  }, []);

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setEditedData({ ...data[index] });
  };

  const handleSave = (index: number) => {
    const updatedData = [...data];
    updatedData[index] = editedData;
    setData(updatedData);
    setEditingIndex(null);
  };

  const handleDelete = (index: number) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };

  const handleChange = (e: any) => {
    setEditedData({ ...editedData, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-4">
      <NavBar />
      <h1 className="text-2xl font-bold mb-4">Submitted Data</h1>
      <div className="overflow-x-auto">
        <table className="w-full border text-center">
          <thead className="bg-purple-700 text-white">
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Age</th>
              <th className="border px-4 py-2">Gender</th>
              <th className="border px-4 py-2">Feedback</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry: any, index: number) => (
              <tr key={index}>
                {editingIndex === index ? (
                  <>
                    <td className="border px-2"><input name="fullName" value={editedData.fullName} onChange={handleChange} className="border p-1" /></td>
                    <td className="border px-2"><input name="email" value={editedData.email} onChange={handleChange} className="border p-1" /></td>
                    <td className="border px-2"><input name="age" value={editedData.age} onChange={handleChange} className="border p-1" /></td>
                    <td className="border px-2"><input name="gender" value={editedData.gender} onChange={handleChange} className="border p-1" /></td>
                    <td className="border px-2"><input name="feedback" value={editedData.feedback} onChange={handleChange} className="border p-1" /></td>
                    <td className="border px-2">
                      <button onClick={() => handleSave(index)} className="text-green-600 hover:underline">Save</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="border px-2">{entry.fullName}</td>
                    <td className="border px-2">{entry.email}</td>
                    <td className="border px-2">{entry.age}</td>
                    <td className="border px-2">{entry.gender}</td>
                    <td className="border px-2">{entry.feedback}</td>
                    <td className="border px-2 space-x-2">
                      <button onClick={() => handleEdit(index)} className="text-blue-600 hover:underline">Edit</button>
                      <button onClick={() => handleDelete(index)} className="text-red-600 hover:underline">Delete</button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
