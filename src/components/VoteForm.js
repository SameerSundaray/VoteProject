// src/components/VoteForm.js
import React, { useState, useContext } from 'react';
import { VoteContext } from '../contexts/VoteContext';

const VoteForm = ({ closeForm }) => {
  const { addVote } = useContext(VoteContext);
  const [voter, setVoter] = useState('');
  const [candidate, setCandidate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (voter && candidate) {
      addVote(voter, candidate);
      closeForm();
    }
  };

  return (
    <div className="vote-form">
      <h2>New Vote</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Voter Name:
          <input type="text" value={voter} onChange={(e) => setVoter(e.target.value)} required />
        </label>
        <label>
          Candidate:
          <select value={candidate} onChange={(e) => setCandidate(e.target.value)} required>
            <option value="" disabled>Select a candidate</option>
            <option value="Suresh">Suresh</option>
            <option value="Deepank">Deepank</option>
            <option value="Abhik">Abhik</option>
          </select>
        </label>
        <button type="submit">Vote</button>
      </form>
      <button onClick={closeForm}>Close</button>
    </div>
  );
};

export default VoteForm;
