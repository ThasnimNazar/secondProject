import asyncHandler from 'express-async-handler'
import nodeMailer from 'nodemailer'

const signUp = asyncHandler(async(req,res)=>{
    let testaccount = await nodeMailer.createTestAccount()
     res.status(201).json({message:'signUp successfully'})
     res.status(401);
     throw new Error('something went wrong')

})

export{
    signUp
}



