import { Connector } from '@google-cloud/cloud-sql-connector'
import mysql from 'mysql2/promise'
import config from '../../config.js'

const { DB_USER, DB_PASS, DB_NAME, INSTANCE_CONNECTION_NAME } = config

const connector = new Connector()

export async function getPool() {
  const clientOpts = await connector.getOptions({
    instanceConnectionName: INSTANCE_CONNECTION_NAME,
    ipType: 'PUBLIC', // o 'PRIVATE'
  })

  return mysql.createPool({
    ...clientOpts,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  })
}
