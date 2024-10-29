import { DataTypes } from 'sequelize'
import db from './ConectionModel.js'

const Tasks = db.define(
  'tasks',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: { type: DataTypes.STRING, field: 'nombre' },
    completed: { type: DataTypes.BOOLEAN, field: 'estado_tarea' },
  },
  {
    timestamps: false,
  }
)

export default Tasks
