import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

//app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// api end points
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(port, () => {
  console.log(`server started on https://localhost:${port}`);
});

// mongodb+srv://vedanshsavla:CkxJPk7DIcMHiBm6@cluster0.5qghp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
