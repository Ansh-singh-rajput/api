const mongoose = require('mongoose')
const liveUrl = 'mongodb+srv://ansh9754:ansh123@cluster0.kcjt9gf.mongodb.net/AdmissionPortal'



const connectDb=()=>{
    return mongoose.connect(process.env.LIVE_URL)
    .then(()=>{
        console.log("connected with mongoose");
    }).catch((err)=>{
        console.log(err);
    });  
};
module.exports = connectDb;
