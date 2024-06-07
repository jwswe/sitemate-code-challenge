import { Router, Request, Response } from "express";
import { Issue, issues } from "../data/issues";
import { v4 as uuid } from "uuid";

const router = Router();

// Create: accepts a JSON object & prints/logs the object
router.post("/", (req: Request, res: Response) => {
  
  const newIssue: Issue = { id: uuid(), ...req.body };
  
  issues.push(newIssue);
  
  res.status(201).json(newIssue);
});

// Read: returns a static JSON object
router.get("/", (req: Request, res: Response) => {
  res.json(issues);
});

// Update: accepts a JSON object & prints/logs the object
router.put("/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedIssue: Issue = req.body;
  const index = issues.findIndex((issue) => issue.id === id);
  if (index !== -1) {
    issues[index] = updatedIssue;
    
    res.json(updatedIssue);
  } else {
    res.status(404).send("Issue not found");
  }
});

// Delete: prints/logs out the object or id to delete
router.delete("/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const index = issues.findIndex((issue) => issue.id === id);
  if (index !== -1) {
    const deletedIssue = issues.splice(index, 1)[0];
    
    res.json(deletedIssue);
  } else {
    res.status(404).send("Issue not found");
  }
});

export default router;
