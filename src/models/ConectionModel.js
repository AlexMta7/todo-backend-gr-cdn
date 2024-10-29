import { Sequelize } from 'sequelize'
import config from '../../config.js'

const db = new Sequelize(config.DATABASE, config.USERDB, config.PASSDB, {
  host: config.HOSTDB,
  dialect: 'mysql',
})

export default db
