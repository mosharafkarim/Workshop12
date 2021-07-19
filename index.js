const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost/application",{useNewUrlParser:true,useUnifiedTopology:true})
.then( ()=> {
    console.log("connection successful....") 
})
.catch((err) => {
    console.log(err)
})

const userSchema=new mongoose.Schema({
    name:String,
    email:String
})

const User=mongoose.model('user',userSchema)

async function createUser(){
    const user=new User({
        name:'Mosharaf',
        email:'karim@leewayhertz.com'
    })
    const result=await user.save()
    console.log(result)
}
async function getUser(){
     // const user=await User.find().select({name : 1})
    // const user=await User.findById('60f195358a0ae13b1030146d')
    /*const user=await User.find()
                .sort({name : 1})
                .limit(1)*/
    // const user=await User.find().count()
    let page=1
    let limit=2
    const user=await User.find().skip((page-1)*limit).select('_id').limit(limit)
     console.log(user)
}
async function update(id){
    const result = await User.update({_id:id},{
        $set:{
            name:'Mosharaf123',
            email:'mosharafkarim1999@gmail.com'
        }
    })
    console.log(result)
    /*const user=await User.findById(id)
    if(user){
        user.name='Karim'
        user.email='mosharafkarim1999@gmail.com'
        const result=await user.save()
        console.log(result)
    }
    return */
}
update('60f193daf5db8c234c5fc2ab')
// createUser()
// getUser()