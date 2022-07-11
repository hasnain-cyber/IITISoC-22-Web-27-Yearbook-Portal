const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const PORT = 5000; // later put it into an env

const { router: userRouter } = require("./routes/userRoutes");
app.use("/", userRouter);

app.listen(PORT, () => console.log("Server ready and running!"));
