const fs = require('fs');
const dotenv = require('dotenv');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env')) {
  dotenv.config({
    path: './config.env'
  });
}

const HANDLERS =  process.env.HANDLER === undefined ? "^[.]" : process.env.HANDLER;

//const HANDLERS = process.env.HANDLER === 'false' || process.env.HANDLER === 'null' ? '^' : '^';
const AUTHOR = process.env.AUTHOR || 'ᴠɪᴘᴇʀ-x';
const SUDO = process.env.SUDO || '919656459062,27630425578';
const OWNER_NAME = process.env.OWNER_NAME || 'Viper-X';
const BOT_NAME = process.env.BOT_NAME || 'WhatsApp-Bot';
const WORK_TYPE = process.env.WORK_TYPE || 'public'
const DATABASE_URL = process.env.DATABASE_URL || './assets/database.db';
//const DATABASE_URL = DATABASE_URL
const DATABASE = DATABASE_URL === './assets/database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })  
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          native: true,
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      })

module.exports = {
  HANDLERS,
  AUTHOR,
  SUDO,
  OWNER_NAME,
  BOT_NAME,
  WORK_TYPE,
  DATABASE
};
