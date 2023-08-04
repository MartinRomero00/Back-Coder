import { getById } from "../dao/mongoDB/userDao.js"
import { logger } from "../helpers/logger.js"

export const registerResponse = (req, res, next) => {
    try {
        res.json({
            message: 'User created successfully',
            // session: req.session
        })
    } catch (error) {
        logger.error(error)
        throw new Error(error)
    }   
}

export const loginResponse = async (req, res, next) => {
    try {
        const user = await getById(req.session.passport.user)
        const {first_name, last_name, email, cart, _id} = user
        res.json({
            message: 'User logged in successfully',
            // session: req.session,
            user:{
                id: _id,
                Nombre: first_name,
                Apellido: last_name,
                Correo: email,
                cart,
            }
        })
    } catch (error) {
        logger.error(error)
        throw new Error(error)
    }   
}