import dotenv from "dotenv";
import connectMongoDB from "./db/database.js";
import app from "./app.js"; // Import the app object

dotenv.config({
    path: "./.env"
});

connectMongoDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.error("MongoDB Connection Failed!!!", error);
    });
