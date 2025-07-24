import env from 'dotenv'

env.config()

export default {
  DB_DIALECT: process.env.DB_DIALECT || 'mysql',
  PORT: process.env.PORT || 3000,
  // Configuración de la base de datos
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS,
  DB_NAME: process.env.DB_NAME,

  // Configuración de conexión
  INSTANCE_CONNECTION_NAME: process.env.INSTANCE_CONNECTION_NAME,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT || 3306, // Puerto por defecto para MySQL
  USE_SOCKET: process.env.USE_SOCKET || 'false',
}
