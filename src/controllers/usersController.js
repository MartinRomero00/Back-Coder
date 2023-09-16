import { getById } from "../dao/mongoDB/userDao.js"
import { getAllService, deleteAllService } from "../services/usersService.js"
import transporter from "../helpers/mailing.js"
import config from "../config/config.js"

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
        const {first_name, last_name, email, role} = user
        res.json({
            message: 'User logged in successfully',
            user:{
                Nombre: first_name,
                Apellido: last_name,
                Correo: email,
                Role: role
            }
        })
    } catch (error) {
        console.log(error)
    }   
}

export const getAllController = async (req, res) => {
    try {
        const users = await getAllService();
        const formatedUsers = users.map(user => ({
            Nombre: user.first_name,
            Apellido: user.last_name,
            Correo: user.email,
            Role: user.role
            }))
        res.json({
            message: 'Users listed successfully',
            users: formatedUsers
        })
    } catch (error) {
        throw new Error(error);
    }
}

export const deleteAllController = async (req, res) => {
    try {
        const users = await getAllService();
        const fechaLimite = new Date();
        fechaLimite.setDate(fechaLimite.getDate() - 2);
        const usersToDelete = users.filter(user => {
            const lastLoginTimestamp = user.last_login.getTime();
            const fechaLimiteTimestamp = fechaLimite.getTime();
            return lastLoginTimestamp < fechaLimiteTimestamp;
        });

        for (const user of usersToDelete) {
            const mailOptions = {
                from: config.mail,
                to: user.email,
                subject: 'Eliminación de usuarios inactivos',
                html: `
                <p>Estimado/a ${user.first_name} ${user.last_name},</p>
                <p>Le informamos que su usuario ha sido eliminado por inactividad.</p>
                <p>Saludos cordiales,</p>
                <p>Equipo de soporte</p>
                `
            }
            await transporter.sendMail(mailOptions);
        }

        const deletedUsers = await deleteAllService(usersToDelete);
        res.json({
            message: 'Users deleted successfully',
            deleted_users: deletedUsers
        })
    } catch (error) {
        throw new Error(error);
    }
}