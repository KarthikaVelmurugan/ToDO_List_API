const db = require('../database/db')

const deleteToDo = async (req,res)=>{
    const result = await db.query(`DELETE FROM TODO_LIST WHERE ID = ${req.params.id}`)
    return result;
}

module.exports = {
    deleteToDo : deleteToDo
}