import express from 'express';
import todos from '../modules/todo';

const router = express.Router();

router.get('/', todos.getAllTodos);
// router.post('/', Todos.getAll );
// router.get('/todo:id', Todos.getAll );
// router.put('/todo:id', Todos.getAll );
// router.delete('/todo:id', Todos.getAll );


export default router;
