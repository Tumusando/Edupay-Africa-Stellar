import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import stellarRoutes from "./routes/stellar.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/stellar", stellarRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Backend running on http://localhost:${PORT}`));