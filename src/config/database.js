import { Sequelize } from 'sequelize'

const db = new Sequelize('mern_db', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})

export default db;

