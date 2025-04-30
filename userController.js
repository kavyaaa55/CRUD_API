import userModule from "../module/userModule.js"

export const create = async(req,res)=>{
    try{
        const unserData = new userModule(req.body) //data submitted by the user
        const {email} = unserData //take email from the detial submitted
        const userExist = await userModule.findOne({email}) //find if that email exist in the data stored previously

        if(userExist){      //if user already exists
            return res.status(400).json({message: "user already exist"})
        }
        const saveUser = await unserData.save()  //if new useer save the data
        res.status(200).json(saveUser)
    }
    catch(error){
        console.log(error)
    }
}

export const display = async(req,res)=>{
    try{
        const users = await userModule.find();
        if(users.length === 0){
            return res.status(400).json({message: "user not found!"})
        }
        res.status(200).json(users)
    }
    catch(error){
        res.status(500).json({ error: "internal server error"})
    }
}

export const UpdateData = async(req,res) =>{
    try{
        const id = req.params.id
        const underexist = await userModule.findById({_id: id})
        if(!underexist){ //user dont exist
            return res.status(404).json({message: "user not found!"})
        }
        const updateUser = await userModule.findByIdAndUpdate(id, req.body, {new:true})
        res.status(201).json(updateUser)
    }
    catch(error){
        res.status(500).json({ error: "internal server error"})
    }
}



export const deleteData = async(req,res)=>{
    try{
        const id = req.params.id
        const underexist = await userModule.findById({_id: id})
        if(!underexist){ //user dont exist
            return res.status(404).json({message: "user not found!"})
        }
        await userModule.findByIdAndDelete(id)
        res.status(201).json({message:"data deleted!"})
    }
    catch(eror){
        res.status(500).json({ error: "internal server error"})
    }
} 

