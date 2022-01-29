import express from 'express';

//http:/localhost:5000/posts
const route = express.Router()
route.get('/', (req , res) => {
    res.send("This Words")
})



export default route