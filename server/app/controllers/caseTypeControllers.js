'use strict'

const catchAsyncFunction = require('../middlewares/catchAsyncFun')
const CaseType = require('../model/caseType')


exports.addCaseType = async(req,res)=>{
    try {
        const { case_type } = req.body;
        const checkCaseData = await CaseType.find({case_type})
        if(checkCaseData){
          res.json({
            success: false,
            message: "case type added already",
          });
        }

    
        const caseData = await CaseType.create({
            case_type: case_type,
        });
    
        res.json({
          success: true,
          message: "case type added successfully",
          'data': caseData
        });
      } catch (error) {
        console.log(error);
        res.status(400).json(error);
      }
    }

exports.caseTypeList = async(req,res)=>{
    try {
        const caseData = await CaseType.find()
    
        res.json({
          success: true,
          'data': caseData
        });
      } catch (error) {
        console.log(error);
        res.status(400).json(error);
      }
}

exports.deleteCaseType = async(req,res)=>{
    try {
        await CaseType.findOneAndDelete({_id:req.params.id})
    
        res.json({
          success: true,
          message: 'case type deleted successfully'
        });
      } catch (error) {
        console.log(error);
        res.status(400).json(error);
      }
}