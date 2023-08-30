import AdminService from "../services/AdminService";
import { sequelize } from "../helpers/DataBaseConnection";

const adminService = new AdminService(sequelize);
module.exports = {
  async getBalanceReport(req, res) {
    try {
      const balanceReports = await adminService.getBalanceReportAsync();
      return res.status(200).json(balanceReports);
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({
          message: "An error occurred while fetching the balance report.",
        });
    }
  },
};
