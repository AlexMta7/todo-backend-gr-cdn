import { Sequelize } from 'sequelize'
import config from '../../config.js'

export const connectDatabase = async () => {
  const sequelize = new Sequelize(config.DATABASE, config.USERDB, config.PASSDB, {
    host: config.HOSTDB,
    dialect: 'mysql',
  })

  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}
