import React, { useState } from 'react';
import { Issue } from '../utils/api';
import { Button, TextField, Box, Typography, Card, CardContent, CardActions } from '@mui/material';

interface IssueItemProps {
  issue: Issue;
  onUpdate: (issue: Issue) => void;
  onDelete: (id: string) => void;
}

const IssueItem: React.FC<IssueItemProps> = ({ issue, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedIssue, setUpdatedIssue] = useState<Issue>({ ...issue });

  const handleDelete = () => {
    onDelete(issue.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUpdatedIssue(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(updatedIssue);
    setIsEditing(false);
  };

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        {isEditing ? (
          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Title"
              name="title"
              value={updatedIssue.title}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              label="Description"
              name="description"
              value={updatedIssue.description}
              onChange={handleChange}
              required
              multiline
              rows={4}
              fullWidth
            />
            <CardActions>
              <Button type="submit" variant="contained" color="primary">
                Save
              </Button>
              <Button variant="outlined" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
            </CardActions>
          </Box>
        ) : (
          <div>
            <Typography variant="h6">{issue.title}</Typography>
            <Typography variant="body2">{issue.description}</Typography>
            <CardActions>
              <Button onClick={handleEdit} variant="contained" color="primary">
                Edit
              </Button>
              <Button onClick={handleDelete} variant="outlined" color="secondary">
                Delete
              </Button>
            </CardActions>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default IssueItem;
