import { Router } from "express";
import {
  getAllTodos,
  createTodo,
  updateTodo,
  getTodo,
  deleteTodo
} from "../controllers/todo";
import { checkValidInputs } from "../middlewares/todoValidation";

const router = Router();

router.get("/", getAllTodos);
router.post("/", checkValidInputs, createTodo);
router.put("/:todoId", updateTodo);
router.get("/:todoId", getTodo);
router.delete("/:todoId", deleteTodo);

export default router;
