import mongoose from "mongoose";
async function DetaBase() {
    await mongoose.connect("mongodb://localhost:27017/class")
    const schema= new  mongoose.Schema({
        Name:String,
        age:Number,
        class:Number,
    },
     {
        collection:"Students"
     }
    )
    const model=mongoose.model("class",schema)
    const result=await model.find()
    console.log(result)
    
}
DetaBase()