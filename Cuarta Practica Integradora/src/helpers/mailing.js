import { createTransport } from 'nodemailer';
import config from '../config/config.js';

const transporter = createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    auth: {
        user: config.mail,
        pass: config.pass
    }
});

export const sendMail = async (email, token, time) => {
    try {
        const mailOptions = {
            from: config.mail,
            to: email,
            subject: 'Bienvenido a Tercera Practica Integradora',
            html: `
            <p>Haga clic en el siguiente enlace para poder restablecer su contraseña:</p>
            <a href="http://localhost:8080/api/view/formulario?token=${token}&time=${time}">Reestablecer contraseña</a>
            `
        }
        await transporter.sendMail(mailOptions);    
        console.log('Email sent');
    } catch (error) {
        throw new Error(error.message);
    }
}
