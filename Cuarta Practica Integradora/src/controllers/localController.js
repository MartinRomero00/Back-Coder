import { getById } from "../dao/mongoDB/userDao.js"
import moment from "moment-timezone"

export const registerResponse = (req, res, next) => {
    try {
        res.json({
            message: 'User created successfully',
        })
    } catch (error) {
        console.log(error)
    }   
}

export const loginResponse = async (req, res, next) => {
    try {
        const user = await getById(req.session.passport.user)
        const {first_name, last_name, email, cart, _id, last_connection} = user
        user.last_connection = Date.now();
        await user.save()
        const lastConnectionFormatted = moment(user.last_connection)
        .tz('America/Argentina/Buenos_Aires')
        .format('DD/MM/YYYY HH:mm:ss')
        res.json({
            message: 'User logged in successfully',
            user:{
                id: _id,
                Nombre: first_name,
                Apellido: last_name,
                Correo: email,
                Carrito: cart,
                last_connection: lastConnectionFormatted
            }
        })
    } catch (error) {
        console.log(error)
    }   
}