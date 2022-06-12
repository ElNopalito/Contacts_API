const express = require('express')
const contactsModel = require('../Models/contactsSchema')

const router = express.Router();

router.get('/', async(req, res) => {
   try {
    const contacts = await contactsModel.find()
    res.status(200).json(contacts)
   } catch (error) {
        console.log(error);
   }})

   router.post('/', async (re,res) => {
    const contactsData = req.body
    try {
        const contacts = await contactsModel.create(contactsData)
        res.status(201).json(contacts)
    } catch (error) {
        console.log(error);
        res.status(400).json({msg: "WHY WON'T YOU WORK, STUPID ******"})
    }
   })
   module.exports = router
