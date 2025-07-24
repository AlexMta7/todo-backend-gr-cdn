import { Sequelize } from 'sequelize'
import config from '../../config.js'

export const connectDatabase = async () => {
  try {
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

    const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
      host,
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
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}
