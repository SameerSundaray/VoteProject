// src/components/CandidateList.js
import React, { useContext } from 'react';
import { VoteContext } from '../contexts/VoteContext';

const CandidateList = () => {
  const { votes, deleteVote } = useContext(VoteContext);
  const candidates = ['Suresh', 'Deepank', 'Abhik'];

  return (
    <div>
      {candidates.map(candidate => (
        <div key={candidate}>
          <h3>{candidate}</h3>
          <p>Votes: {votes[candidate] ? votes[candidate].length : 0}</p>
          <ul>
            {votes[candidate] && votes[candidate].map((voter, index) => (
              <li key={index}>
                {voter} <button onClick={() => deleteVote(voter, candidate)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CandidateList;


