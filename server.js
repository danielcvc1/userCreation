import {app} from "./app.js"
import {database} from "./database.js"


try {
   database.sequelize.authenticate();
   database.sequelize.sync();
    console.log("Connection with DB has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  
  
  const port = 7000;
  app.listen(port, () => {
    console.log("THE SERVER HAS STARTED SUCCSESSFULY!");
  });
  