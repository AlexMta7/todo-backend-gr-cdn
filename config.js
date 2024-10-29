import env from 'dotenv'

env.config()

export default {
  // AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
  // AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  PORT: process.env.PORT, // Puerto del Servidor Express (3000)
  DATABASE: process.env.DATABASE, // Nombre de la Base de Datos
  USERDB: process.env.USER, // Usuario de la Base de Datos
  HOSTDB: process.env.DB_HOST,
  PORTDB: process.env.DB_PORT,
  USERDB: process.env.DB_USER,
  PASSDB: process.env.DB_PASSWORD,
  // SECRET_NAME: process.env.SECRET_NAME, // Nombre del Secreto en AWS Secrets Manager
  // APIGateway: process.env.API_GATEWAY_URL,
}
