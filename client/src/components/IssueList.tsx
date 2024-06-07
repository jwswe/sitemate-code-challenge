import React from 'react';
import { Issue } from '../utils/api';
import IssueItem from './IssueItem';
import { Box, Typography } from '@mui/material';

interface IssueListProps {
  issues: Issue[];
  onUpdate: (issue: Issue) => void;
  onDelete: (id: string) => void;
}

const IssueList: React.FC<IssueListProps> = ({ issues, onUpdate, onDelete }) => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Issues
      </Typography>
      {issues.map(issue => (
        <IssueItem key={issue.id} issue={issue} onUpdate={onUpdate} onDelete={onDelete} />
      ))}
    </Box>
  );
};

export default IssueList;
