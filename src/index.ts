import express, { Express, Request, Response } from 'express';
import helmet from "helmet";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Test");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
 

