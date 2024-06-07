import React, { useState } from "react";
import { Issue } from "../utils/api";
import { Button, TextField, Box, Typography } from "@mui/material";

interface IssueFormProps {
  onSave: (issue: Omit<Issue, "id">) => void;
  initialData?: Issue;
}

const IssueForm: React.FC<IssueFormProps> = ({ onSave, initialData }) => {
  const [issue, setIssue] = useState<Omit<Issue, "id">>(
    initialData
      ? { title: initialData.title, description: initialData.description }
      : { title: "", description: "" }
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setIssue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(issue);
    setIssue({ title: "", description: "" });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <Typography variant="h4" gutterBottom>
        Create New Issue
      </Typography>
      <TextField
        label="Title"
        name="title"
        value={issue.title}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        label="Description"
        name="description"
        value={issue.description}
        onChange={handleChange}
        required
        multiline
        rows={4}
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Create
      </Button>
    </Box>
  );
};

export default IssueForm;
