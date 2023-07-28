import { getById } from "../dao/mongoDB/userDao.js"

export const registerResponse = (req, res, next) => {
    try {
        res.json({
            message: 'User created successfully',
            session: req.session
        })
    } catch (error) {
        console.log(error)
    }   
}

export const loginResponse = async (req, res, next) => {
    try {
        const user = await getById(req.session.passport.user)
        const {first_name, last_name, email, age, cart, role} = user
        res.json({
            message: 'User logged in successfully',
            session: req.session,
            user:{
                first_name,
                last_name,
                email,
                age,
                cart,
                role
            }
        })
    } catch (error) {
        console.log(error)
    }   
}