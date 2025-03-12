import React, { useState } from 'react';
import { useData } from '../context/DataContext';

export default function About() {
  const { users } = useData();
  const [city, setCity] = useState('');

  const filteredUsers = users.filter(user => 
    user.address.city.toLowerCase().includes(city.toLowerCase())
  );

  return (
    <div>
      <h2>About Page</h2>
      <input 
        type="text" 
        placeholder="Filter by City" 
        value={city}
        onChange={(e) => setCity(e.target.value)} 
      />
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>{user.name} - {user.address.city}</li>
        ))}
      </ul>
    </div>
  );
}
