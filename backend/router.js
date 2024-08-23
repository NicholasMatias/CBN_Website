import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';


dotenv.config();
const app = express()

app.use(cors());
app.use(express.json());

app.get('/test', (req, res) => {
    try{
        res.json('Hello World!')
    }
    catch(error){
        res.status(500).send("Error in test:", error)
    }
    }
)
app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`)    
  })