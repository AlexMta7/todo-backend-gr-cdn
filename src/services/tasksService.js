import Tasks from '../models/Tasks.js'

// Se guarda la información de una nueva tarea
export const saveTask = async (data) => {
  const Task = {
    title: data.title,
    completed: data.completed,
  }

  return await Tasks.create(Task)
}

// Se obtienen todas las tareas registradas
export const getAllTasks = async () => {
  return await Tasks.findAll()
}

// Actualiza el registro de una tarea por id
export const updateTaskById = async (data) => {
  return await Tasks.update(
    { title: data.title, completed: data.completed },
    {
      where: {
        id: data.id,
      },
    }
  )
}

// Elimina el registro de una tarea por id
export const deleteTaskById = async (id) => {
  return Tasks.destroy({
    where: {
      id: id,
    },
  })
}
