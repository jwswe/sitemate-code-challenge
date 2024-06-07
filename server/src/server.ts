import express from "express";
import issuesRouter from "./routes/issues";
import cors from 'cors'

const app = express();
const port = 5000;

app.use(cors())
app.use(express.json());
app.use("/issues", issuesRouter);

app.listen(port, () => {
  console.log(`REST API server listening at http://localhost:${port}`);
});
