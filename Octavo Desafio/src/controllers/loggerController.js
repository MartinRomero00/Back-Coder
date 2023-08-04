import { logger } from "../helpers/logger.js";

export const loggerHighOrder = (req, res) => {
    logger.info(" Prueba de logger High Order");
    logger.warn(" Prueba de logger High Order");
    logger.error(" Prueba de logger High Order");
    res.send("Prueba de logger High Order");
}

export const loggerLowOrder = (req, res) => {
    logger.silly(" Prueba de logger Low Order");
    logger.debug(" Prueba de logger Low Order");
    logger.verbose(" Prueba de logger Low Order");
    logger.http(" Prueba de logger Low Order");
    res.send("Prueba de logger Low Order");
}
