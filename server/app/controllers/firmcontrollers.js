'use strict'
const UserModel = require('../model/users')
const Role = require('../model/role')
const UserRole = require('../model/userRole')
const catchAsyncFunction = require('../middlewares/catchAsyncFun')



exports.getAllFirms = async (req, res) => {
    try {
        const role = await Role.findOne({ title: 'firm' }).lean();

        if (!role) {
            return res.json({
                success: false,
                message: 'Role not found'
            });
        }

        const userRole = await UserRole.find({ role_id: role._id }).lean();

        if (userRole.length === 0) {
            return res.json({
                success: true,
                allFirms: []
            });
        }

        const user_ids = userRole.map((item) => item.user_id);

        const allFirms = await UserModel.find({ _id: { $in: user_ids } })
            .sort([
                ['plan_price', 'desc'],   // Sort by plan_price in descending order (higher values first)
                ['name', 'asc'],          // Then sort by name alphabetically in ascending order
            ])
            .lean();

        res.json({
            success: true,
            allFirms
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}
