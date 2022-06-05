import express from "express";
import StudentController from '../controllers/StudentController.js'
let router=express.Router()

router.get('/',StudentController.getAllDoc);
router.post('/',StudentController.createDoc);
router.get('/:id',StudentController.getSingleDocByID);
router.delete('/:id',StudentController.deleteDocById);
router.put('/:id',StudentController.updateDocById);
export default router;