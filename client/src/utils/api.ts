import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const API_URL = 'http://localhost:5000/issues';

export interface Issue {
  id: string;
  title: string;
  description: string;
}

export const getIssues = async () => {
  const response = await axios.get<Issue[]>(API_URL);
  return response.data;
};

export const createIssue = async (issue: Omit<Issue, 'id'>) => {
  const newIssue = { ...issue, id: uuidv4() };
  const response = await axios.post<Issue>(API_URL, newIssue);
  return response.data;
};

export const updateIssue = async (id: string, issue: Issue) => {
  const response = await axios.put<Issue>(`${API_URL}/${id}`, issue);
  return response.data;
};

export const deleteIssue = async (id: string) => {
  const response = await axios.delete<Issue>(`${API_URL}/${id}`);
  return response.data;
};
