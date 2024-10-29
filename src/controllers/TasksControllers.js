// import Task from '../models/Task'

import {
  deleteTaskById,
  getAllTasks,
  saveTask,
  updateTaskById,
} from '../services/tasksService.js'

// Get all tasks
export const AllTasks = async (req, res) => {
  try {
    // console.log(req)
    const tasks = await getAllTasks()
    res.json(tasks)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Server error - AllTasks' })
  }
}

// // Get a single task
// export const getTask = async (req, res) => {
//   try {
//     const task = await Task.findById(req.params.id)
//     if (!task) {
//       return res.status(404).json({ error: 'Task not found' })
//     }
//     res.json(task)
//   } catch (error) {
//     res.status(500).json({ error: 'Server error' })
//   }
// }

// Create a task
export const createTask = async (req, res) => {
  try {
    console.log(req.body)
    const task = await saveTask(req.body)
    res.status(201).json(task)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
}

// Update a task
export const updateTask = async (req, res) => {
  try {
    const task = await updateTaskById(req.body)
    if (!task) {
      return res.status(404).json({ error: 'Task not found' })
    }
    res.json(task)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
}

// Delete a task
export const deleteTask = async (req, res) => {
  try {
    await deleteTaskById(req.params.id)
    res.status(200).json({ message: 'Task deleted successfully' })
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
}
