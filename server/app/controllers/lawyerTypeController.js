'use strict'

const catchAsyncFunction = require('../middlewares/catchAsyncFun')
const Lawyertype = require('../model/lawyerType')


exports.addLawyerType = async(req,res)=>{
    try {
        const { laywer_type } = req.body;
        const checkCaseData = await Lawyertype.find({laywer_type})
        if(checkCaseData){
          res.json({
            success: false,
            message: "lawyer type added already",
          });
        }
    
        const lawyerTypeData = await Lawyertype.create({
            laywer_type: laywer_type,
        });
    
        res.json({
          success: true,
          message: "lawyer type added successfully",
          'data': lawyerTypeData
        });
      } catch (error) {
        console.log(error);
        res.status(400).json(error);
      }
    }

exports.lawyerTypeList = async(req,res)=>{
    try {
        const data = await Lawyertype.find()
    
        res.json({
          success: true,
          'data': data
        });
      } catch (error) {
        console.log(error);
        res.status(400).json(error);
      }
}

exports.deleteLawyerType = async(req,res)=>{
    try {
        await Lawyertype.findOneAndDelete({_id:req.params.id})
    
        res.json({
          success: true,
          message: 'lawyer type deleted successfully'
        });
      } catch (error) {
        console.log(error);
        res.status(400).json(error);
      }
}