const express = require('express');
const app = express();
const PORT = 3000;
const mongoConfig = require('./config/mongoConfig')
const contactsRouter = require('./Routes/contactsRouter');

app.use(express.json());

app.use('/contacts', contactsRouter)

app.get('/', (req,res) => {
    res.status(200).json({msg:'Welcome'})
})

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
})
