import express from 'express'
import { hcfSignup } from '../controllers/hcfuser.controller.js'
import { auth } from '../middlewares/auth.js'

import multer from "multer"
const upload = multer({ dest: 'uploads/' })

const router = express.Router()

router.post('/signup', upload.single('avatar'), hcfSignup)


export { router as hcfRoute }