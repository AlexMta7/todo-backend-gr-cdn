import { Sequelize } from 'sequelize'
import config from '../../config.js'

const {
  DB_DIALECT,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASS,
  DB_NAME,
  USE_SOCKET,
  INSTANCE_CONNECTION_NAME,
} = config

// Opción 1: IP privada / pública / proxy TCP
let host = DB_HOST
let dialectOptions = {}

// Opción 2: Socket Unix (Cloud Run / GCE / GKE con volumen /cloudsql montado)
if (USE_SOCKET === 'true') {
  host = `/cloudsql/${INSTANCE_CONNECTION_NAME}`
  dialectOptions = {
    socketPath: host, // funciona para mysql2
  }
}

const db = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  port: DB_PORT ? Number(DB_PORT) : undefined,
  dialect: DB_DIALECT, // 'mysql' o 'postgres'
  logging: false,
  pool: {
    max: 10,
    min: 0,
    idle: 10000,
    acquire: 30000,
  },
  dialectOptions,
})

export default db
