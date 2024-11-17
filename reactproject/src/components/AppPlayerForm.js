import React, { useState } from 'react';

const AddPlayerForm = ({ onAddPlayer }) => {
  const [formData, setFormData] = useState({ name: '', position: '', location: '', stats: '' });
  const [formError, setFormError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.name || !formData.position || !formData.location || !formData.stats) {
      setFormError('All fields are required.');
      return;
    }

    try {
      const response = await fetch('https://projectapi-qow8.onrender.com/api/roster', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          stats: formData.stats.split(',').map((stat) => stat.trim()),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to add player.');
      }

      const newPlayer = await response.json();
      onAddPlayer(newPlayer);
      setSuccessMessage('Player added successfully!');
      setFormData({ name: '', position: '', location: '', stats: '' });
      setFormError('');
    } catch (error) {
      setFormError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input name="name" value={formData.name} onChange={handleInputChange} />
      </div>
      <div>
        <label>Position:</label>
        <input name="position" value={formData.position} onChange={handleInputChange} />
      </div>
      <div>
        <label>Location:</label>
        <input name="location" value={formData.location} onChange={handleInputChange} />
      </div>
      <div>
        <label>Stats (comma-separated):</label>
        <input name="stats" value={formData.stats} onChange={handleInputChange} />
      </div>
      <button type="submit">Add Player</button>
      {formError && <p className="error">{formError}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
    </form>
  );
};

export default AddPlayerForm;
