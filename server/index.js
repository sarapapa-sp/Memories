import mongoose from "mongoose";
import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import route from "./routes/post.js" 

const app = express();

app.use('/posts', route);

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


const CONNECTION_URL =
  "mongodb+srv://memories:memories123@memories.rxaym.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server connection established in ${PORT}`)))
    .catch((error) => console.log(error.message));


// mongoose.set('useFindAndModify', false);






