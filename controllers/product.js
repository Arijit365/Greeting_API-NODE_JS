

const getAllProductsStatic = async (req , res) =>{
    res.status(200).json({msg:'products are testing in routes '})
}

const getAllProducts = async(req , res) =>{
    res.status(200).json({msg:'products are testing in routes'})
}
const getTheConversation = async(req , res) => {
    res.status(200).json({msg:'Conversation Json file are uploaded...'})
}
module.exports ={
    getAllProducts,
    getAllProductsStatic,
    getTheConversation, 
}