// Obtiene la información de todas las tareas
export const query_getTasks = `SELECT * FROM TASK`
// Modifica un valor en especifico de la tarea
export const query_updateTask = `UPDATE TASK SET TITLE = :title, COMPLETED = :completed WHERE ID = :id`
// Elimina una tarea por id
export const query_deleteTask = `DELETE FROM TASK WHERE ID = :id`
