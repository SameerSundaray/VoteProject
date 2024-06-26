// src/components/VotingPortal.js
import React, { useState, useContext } from 'react';
import CandidateList from './CandidateList';
import VoteForm from './VoteForm';
import { VoteContext, VoteProvider } from '../contexts/VoteContext';

const VotingPortal = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { totalVotes } = useContext(VoteContext);

  return (
    <div className="voting-portal">
      <h1>Class Monitor Vote</h1>
      <div className="total-votes">
        Total Votes: {totalVotes}
      </div>
      <button onClick={() => setIsFormOpen(true)}>Add New Vote</button>
      {isFormOpen && <VoteForm closeForm={() => setIsFormOpen(false)} />}
      <CandidateList />
    </div>
  );
};

const VotingPortalWithProvider = () => (
  <VoteProvider>
    <VotingPortal />
  </VoteProvider>
);

export default VotingPortalWithProvider;



