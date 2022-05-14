const createToDo = require("../controllers/createToDo.controller")
const createToDoService = async (req,res)=>{
    const result = await createToDo.createToDo(req,res);

    if(result.affectedRows)
     res.json({status:200,message:"Inserted Successfully!"})
     else
     res.json({status:400,message:"Error occured during insert the record"})

}

module.exports = {
    createToDoService : createToDoService
}