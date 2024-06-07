import React, { useEffect, useState } from "react";
import IssueForm from "./components/IssueForm";
import IssueList from "./components/IssueList";
import { Container, Grid, Typography } from "@mui/material";
import {
  Issue,
  createIssue,
  deleteIssue,
  getIssues,
  updateIssue,
} from "./utils/api";

const App: React.FC = () => {
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    const fetchIssues = async () => {
      const data = await getIssues();
      setIssues(data);
    };

    fetchIssues();
  }, []);

  const handleSave = async (issue: Omit<Issue, "id">) => {
    const newIssue = await createIssue(issue);
    setIssues((prevIssues) => [...prevIssues, newIssue]);
  };

  const handleUpdate = async (updatedIssue: Issue) => {
    const newIssue = await updateIssue(updatedIssue.id, updatedIssue);
    setIssues((prevIssues) =>
      prevIssues.map((issue) => (issue.id === newIssue.id ? newIssue : issue))
    );
  };

  const handleDelete = async (id: string) => {
    await deleteIssue(id);
    setIssues((prevIssues) => prevIssues.filter((issue) => issue.id !== id));
  };

  return (
    <Container>
      <Grid container gap={5} >
        <Grid item xs={5}>
          <IssueList
            issues={issues}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        </Grid>
        <Grid item xs={5}>
          <IssueForm onSave={handleSave} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
