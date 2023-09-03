import 'dotenv/config'

export default {
    port: process.env.PORT,
    db: process.env.MONGODB,
    secret_session: process.env.SECRET_SESSION,
    mail: process.env.MAIL,
    pass: process.env.PASS,
    dblocal: process.env.MONGODBLOCAL
}