import { Request, Response } from "express";

import { Todos } from "../entities/TodoList";

// View all Todos
export const getAllTodos = async (req: Request, res: Response) => {
  try {
    const todos: Todos[] = await Todos.find({
      where: { finished: false },
      order: {
        id: "DESC"
      }
    });
    res.status(200).json(todos);
  } catch (err) {
    console.log(err);
  }
};

// Create new Todo
export const createTodo = async (req: Request, res: Response) => {
  try {
    const {
      body: { todoName: name, todoDescription: description }
    } = req;
    const todo: Todos = await Todos.create({ name, description });
    await todo.save();
    return res.status(201).json(todo);
  } catch (err) {
    return res.status(500).json({ Message: "Server error " });
  }
};

// Update Todos
export const updateTodo = async (req: Request, res: Response) => {
  try {
    const { todoId } = req.params;

    const todo: Todos = await Todos.findOne({ where: { id: todoId } });

    if (todo) {
      const { todoName, todoDescription, finished } = req.body;
      todoName ? (todo.name = todoName) : todo.name;
      todoDescription ? (todo.description = todoDescription) : todo.description;
      finished ? (todo.finished = finished) : todo.finished;
      await todo.save();
      return res.status(200).json(todo);
    }
    return res
      .status(404)
      .json({ Message: `Todo with the Id: ${todoId} was not found!!! ` });
  } catch (err) {
    return res.status(500).json({ Message: "Server error " });
  }
};

// Get a single Todo
export const getTodo = async (req: Request, res: Response) => {
  try {
    const { todoId } = req.params;

    const todo: Todos = await Todos.findOne({ where: { id: todoId } });
    if (todo) {
      return res.status(200).json(todo);
    }
    return res
      .status(404)
      .json({ Message: `Todo with the Id: ${todoId} was not found!!! ` });
  } catch (err) {
    return res.status(500).json({ Message: "Server error " });
  }
};

// Delete a Todo
export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { todoId } = req.params;
    const todo: Todos = await Todos.findOne({
      where: { id: todoId }
    });
    if (todo) {
      await todo.remove();
      return res.status(200).json("Todo successful removed");
    }
    return res
      .status(404)
      .json({ Message: `Todo with the Id: ${todoId} was not found!!! ` });
  } catch (err) {
    return res.status(500).json({ Message: "Server error " });
  }
};
