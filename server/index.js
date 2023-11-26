import express from "express";
import cors from "cors";
import modelRoutes from './routes/modelRoutes.js';


const app = express();
app.use(cors({
    origin:["http://127.0.0.1:5500"],
    methods:["POST", "GET" ],
    credentials:true,
}));
app.use(express.json({limit:'50mb'}));
app.use('/api/v1', modelRoutes);
app.get('/', async (req,res) => {res.json('Hello From CodeRythm Test')});

const startServer = async () => {
    try {
        app.listen(8080, () => console.log("Server has started on port http://localhost:8080"))
    } catch (error) {
        console.log(error);
    }
}

startServer();