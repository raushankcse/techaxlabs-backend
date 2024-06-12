import { Router } from "express";
import { createTodo, deleteTask, getTodos, toggleTask, updateTask } from "../Controller/TodoController.js";
import authenticateToken from "../middleware/auth.js";

const router = Router();

router.post('/todos',authenticateToken ,createTodo);
router.get('/todos',authenticateToken, getTodos);
router.post('/todos/:id/toggle', authenticateToken, toggleTask);
router.delete('/todos/:id', authenticateToken, deleteTask );
router.put('/todos/:id', authenticateToken, updateTask);

export default router;

