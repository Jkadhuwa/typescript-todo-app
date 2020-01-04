import express from "express";
import cors from 'cors';
import TodoRoutes from "./routes";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;
app.use("/api/todos", TodoRoutes);
app.use((req, res) => {
  res.status(404).json({ error: "route not found" });
});

export const server = async () => {
  await app.listen(PORT);
  console.log(`Server started at http://localhost:${PORT}`);
  console.log(`Press Ctrl+C to quit`);
};
