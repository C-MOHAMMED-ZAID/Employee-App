const express=require("express");
const router=express.Router();

let salarySchema=require("../models/Salary");
const Employee=require('../models/Employee')

router.route("/create-salary").post(async(req,res,next)=>{
    await salarySchema.create(req.body)
    .then((result)=>{
        res.json({
            data:result,
            message:"Data Successfully added!",
            status:200,
        });
    })
    .catch((err) =>{
        return next(err);
    })
})



router.route("/").get(async(req,res,next)=>{
    await salarySchema.aggregate([
        {
            $lookup:{
                from:'employees',
                localField:'employeeid',
                foreignField:'_id',
                as:'employee'
            }
        }
    ])
    .then((result)=>{
        res.json({
            data:result,
            message:"All items successfully fetched",
            status:200,
        });
    })
    .catch((err)=>{
        return next(err);
    })
        });

router.route("/delete-salary/:id").delete(async(req,res,next)=>{
    await salarySchema.findByIdAndDelete(req.params.id)
    .then(()=>{
        res.json({
            msg:"Data Successfully Deleted.",
        })
    })
    .catch((err)=>{
        console.log(err);
    })
})

router.route("/get-salary/:id").get(async(req,res,next)=>{
    await salarySchema.findById(req.params.id)
    .then((result)=>{
        res.json({
            data:result,
            message:"data successfully fetched.",
            status:200,
        })
    })
    .catch((err)=>{
        return next(err);
    })
})


router.route("/update-salary/:id").put(async(req,res,next)=>{
    await salarySchema.findByIdAndUpdate(req.params.id,{
        $set:req.body,
    })
    .then((result)=>{
        res.json({
            data:result,
            msg:"data successfully updated.",
        })
    })
    .catch((err)=>{
        console.log(err);
    })
})

module.exports=router;