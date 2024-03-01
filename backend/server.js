const  app = require("./app");
const { connectDatabase } = require("./config/database");
if(process.env.NODE_ENV !== "production"){
    require("dotenv").config({path:"./config/config.env"}) ; 
  }
connectDatabase();
app.listen(process.env.PORT,() =>{
    console.log(`Server is running on port ${process.env.PORT}`);
});









