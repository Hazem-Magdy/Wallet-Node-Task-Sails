"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = exports.transactionModel = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const transactions_1 = require("../models/transactions");
const user_1 = require("../models/user");
const sequelize = new sequelize_1.Sequelize("WalletDB", "postgres", "0502349611", {
    host: "localhost",
    port: 5432,
    dialect: "postgres",
});
exports.sequelize = sequelize;
const transactionModel = sequelize.define("Transaction", new transactions_1.Transaction().getAttributes(sequelize.Sequelize), new transactions_1.Transaction().getOptions());
exports.transactionModel = transactionModel;
const userModel = sequelize.define("User", new user_1.User().getAttributes(sequelize.Sequelize), new user_1.User().getOptions());
exports.userModel = userModel;
// const globalProperties = {
//   mySequelize: sequelize,
//   myTransactionModel: transactionModel,
//   myUserModel: userModel,
// };
// // Assign your global properties to the global object
// Object.assign(global, globalProperties);
// export { sequelize, transactionModel, userModel };
