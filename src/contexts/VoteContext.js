// src/contexts/VoteContext.js
import React, { createContext, useState } from 'react';

export const VoteContext = createContext();

export const VoteProvider = ({ children }) => {
  const [votes, setVotes] = useState({ Suresh: [], Deepank: [], Abhik: [] });
  const [totalVotes, setTotalVotes] = useState(0);

  const addVote = (voter, candidate) => {
    setVotes(prevVotes => ({
      ...prevVotes,
      [candidate]: [...(prevVotes[candidate] || []), voter],
    }));
    setTotalVotes(prevTotal => prevTotal + 1);
  };

  const deleteVote = (voter, candidate) => {
    setVotes(prevVotes => {
      const newVotes = { ...prevVotes };
      newVotes[candidate] = newVotes[candidate].filter(v => v !== voter);
      return newVotes;
    });
    setTotalVotes(prevTotal => prevTotal - 1);
  };

  return (
    <VoteContext.Provider value={{ votes, totalVotes, addVote, deleteVote }}>
      {children}
    </VoteContext.Provider>
  );
};

