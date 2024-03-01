"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendThroughGmail = void 0;
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
function sendThroughGmail(payload) {
    const transporter = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: { user: payload.user, pass: payload.password },
    }));
    const defaultMailOptions = { from: payload.user, to: payload.user, subject: '', text: '' };
    const mailOptions = Object.assign(Object.assign({}, defaultMailOptions), payload);
    return new Promise((resolve, error) => {
        transporter.sendMail(mailOptions, (errorResult, valueResult) => {
            if (errorResult) {
                error(errorResult);
            }
            else {
                resolve(valueResult);
            }
        });
    });
}
exports.sendThroughGmail = sendThroughGmail;
