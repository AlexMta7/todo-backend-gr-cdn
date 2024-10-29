import { Router } from 'express'
import {
  AllTasks,
  createTask,
  deleteTask,
  updateTask,
} from '../controllers/TasksControllers.js'

const router = Router()

router.get('/', AllTasks)

// router.get('/:id', getTask)

router.post('/', createTask)

router.put('/:id', updateTask)

router.delete('/:id', deleteTask)

export default router
