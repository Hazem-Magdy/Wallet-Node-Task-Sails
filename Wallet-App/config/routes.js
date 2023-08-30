// module.exports.routes = {
//   // Account routes
//   'POST /api/account/login': 'AccountController.login',
//   //'POST /api/account/login': { action: 'account/login' },
//   'POST /api/account/register': 'AccountController.register',

//   // Wallet routes
//   'POST /api/wallet/transfer': 'WalletController.transfer',

//   // Admin routes
//   'GET /api/admin/balance-report': 'AdminController.getBalanceReport',

// };

let routes = {
  [`get /api/account/login`]: 'AccountController.login',
  [`post /test`]: 'AccountController.login'
}
module.exports.routes = routes;