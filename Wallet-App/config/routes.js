let routes = {
  [`post /api/account/login`]: 'accountController.login',
  [`post /api/account/register`]: 'accountController.register',
  [`post /api/wallet/transfer`]: 'walletController.transfer',
  [`GET /api/admin/balance-report`]: 'adminController.getBalanceReport'
}
module.exports.routes = routes;