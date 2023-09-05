import app from "./app.js";
import logger from "./src/configs/logger.js";



const PORT = process.env.PORT || 8000;
app.listen(PORT,() =>{
    logger.info(`sever is listening at ${PORT}`)
});
