'use strict'
const express = require('express')
const { getAllPlans, subscribeCustomerAndBuyPlan, getUserSubscription, unsubscribeCustomer, getPlanReSubscription, getPlanSubscription, getAllSubscription ,upgradePlan} = require('../controllers/stripePaymentController')
const router = express.Router()


router.route('/get-all-plans').get(getAllPlans)
router.route('/subscribe-customer-and-buy-plan').post(subscribeCustomerAndBuyPlan)
router.route('/get-user-subscription').post(getUserSubscription)
router.route('/unsubscribe-customer').post(unsubscribeCustomer)
router.route('/re-subscribe-customer-to-plan').post(getPlanReSubscription)
router.route('/get-plan-subscription').post(getPlanSubscription)
router.route('/get-all-subscription').get(getAllSubscription)
router.route('/upgrade-plan').post(upgradePlan)




module.exports = router