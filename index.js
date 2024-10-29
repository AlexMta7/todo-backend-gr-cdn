import express from 'express'
import cors from 'cors'
import config from './config.js'
import TaskRoutes from './src/routes/TaskRoutes.js'
import { connectDatabase } from './src/middleware/ConnectDatabase.js'

const app = express()
app.use(cors())
app.use(express.json())

app.listen(config.PORT, () => console.log(`Server is Listening on Port: ${config.PORT}`))

connectDatabase()

// Ruta Raiz
app.get('/', (req, res) => {
  res.send('API is Running')
})

// Rutas de Tareas
app.use('/api/tasks', TaskRoutes)
