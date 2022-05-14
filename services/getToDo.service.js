const getToDo = require("../controllers/getToDo.controller")
const getToDoService = async (req,res) =>{
    const result = await getToDo.getToDo(req,res);
    if(result.length>=1) 
    res.json(result);
    else
    res.json({status:400,message:"No record found"})
}

module.exports = {
    getToDoService : getToDoService
}