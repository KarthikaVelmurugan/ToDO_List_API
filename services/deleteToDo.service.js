const deleteToDo = require("../controllers/deleteToDo.controller")

const deleteToDoService = async (req,res) => {
    const result = await deleteToDo.deleteToDo(req,res);
    if(result.affectedRows>0) {
        res.json({status:200,message:"Delete the record successfully!"})
    }
    else{
        res.json({status:400,message:"Error occured during deleting the record!"})
    }
}

module.exports = {
    deleteToDoService : deleteToDoService
}