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

export default transporter;

// export const sendMail = async (email) => {
//     try {
//         const mailOptions = {
//             from: config.mail,
//             to: email,
//             subject: 'Eliminación de usuarios inactivos',
//             html: `
//             <p></p>
//             `
//         }
//         await transporter.sendMail(mailOptions);    
//         console.log('Email sent');
//     } catch (error) {
//         throw new Error(error.message);
//     }
// }
