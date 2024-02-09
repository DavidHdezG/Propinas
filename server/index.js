import app from './app.js';
import dotenv from 'dotenv';
/* const bodyParser = require('body-parser'); */
import {sequelize} from './database/database.js';


async function main () {
  dotenv.config();
  await sequelize.sync({ force: false });
  app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
  });

}
main();
