import express from 'express'
const router = express.Router();
import { notFound, errorHandler } from '../middleware/errorMiddleware.js'
import { signUp } from '../Controller/parentController.js'


router.post('/signUp',signUp)


export default router


//Landingpage=>method(get)=>/api/landing