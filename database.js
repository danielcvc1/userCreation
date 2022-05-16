import { token } from "morgan";
import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("delivery", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  port: 3346,
});

const User = sequelize.define(
  "User", {
  verified: {
    type: DataTypes.DATE
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false, unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  birthYear: {
    type: DataTypes.INTEGER,
  },
},
  {
    tableName: "users",
    underscored: true,
    timestamps: true,
  }
);

const userToken = sequelize.define(
  "Token", {
  value: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  type: {
    type: DataTypes.STRING,
    allowNull: false,

  }, expirationDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
},
  {
    tableName: "tokens",
    underscored: true,
    timestamps: true,
  }

)


const Order = sequelize.define(
  "Order", {
  nameOfOrder: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  userId:{
    type: DataTypes.INTEGER,
    allowNull: false,
  }

},
  {
    tableName: "orders",
    underscored: true,
    timestamps: true,
  }

)

User.hasMany(userToken)
userToken.belongsTo(User)
User.hasMany(Order)
Order.belongsTo(User)









export const database = {
  sequelize,
  User,
  userToken,
  Order,
};
