'use strict'

const express = require('express');
const { addLawyer, acceptRequest, getTeamLawyer, getSimpleLawyers,deleteTeamMember, getFirmLawyerDetail, getFirmTeamLawyer, getLawyerFirm } = require('../controllers/lawyerController');
const router = express.Router()


router.route('/send-addLawyer-mail').post(addLawyer)
router.route('/firm-lawyer-detail').post(getFirmLawyerDetail)
router.route('/accept-request/:id').get(acceptRequest)
router.route('/team-lawyer').get(getTeamLawyer)
router.route('/simple-lawyer').get(getSimpleLawyers)
router.route('/delete-team-member/:id').delete(deleteTeamMember)
router.route('/get-firm-team-Lawyer').post(getFirmTeamLawyer)




module.exports = router;