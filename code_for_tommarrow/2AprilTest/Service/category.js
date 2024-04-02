const { response } = require("express");
const categoryModel = require("../Model/category")
const jwt = require("jsonwebtoken")

const createCategory = async(req,res)=>{
    const {categoryName } = req.body;
    // console.log("categoryName",categoryName);
    const response = await categoryModel.createCategory(categoryName)
    // console.log("response",response);
    return response
}

const getCategory = async(req,res)=>{
    let response = await categoryModel.getCategory()
    return response;
}

const updateCategory = async(req,res)=>{
    const data = req.body.categoryName;
    const id = req.params.categoryId;
    const getData = await categoryModel.getDataByEmail(id)
    // console.log("getdata",getData);
    if(!getData && getData.lenght > 0 ){
        return res(500).json({"message":"not found"})
    }
    const obj = {
        id:id,
        categoryName:data
    }
    const model = await categoryModel.updateCategory(obj)
    // console.log("model",model);
    return model;    
}

const deleteCategory = async(req,res)=>{
    const id = req.params.categoryId;
    const getData = await categoryModel.getDataByEmail(id)
    // console.log("getdata",getData);
    if(getData && getData.lenght > 0 ){
        return res(500).json({"message":"not found"})
    }
    const response = await categoryModel.deleteCategory(id)
    // console.log("response ",response);
    return response ;
}

module.exports={createCategory , getCategory , updateCategory , deleteCategory} 