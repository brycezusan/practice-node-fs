import sequelize from "sequelize";

const db = new sequelize("travel-agency", "root", "1234", {
  host: "127.0.0.1",
  port: "3306",
  dialect: "mysql",
  define:{
    timestamps:false
  },
  operatorAliases:false

});

export default db
