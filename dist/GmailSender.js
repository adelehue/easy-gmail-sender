"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GmailSender = void 0;
const send_through_gmail_1 = require("./send-through-gmail");
class GmailSender {
    constructor(user, password) {
        this.user = user;
        this.password = password;
    }
    sendMail(mailOptions = {}) {
        const payload = Object.assign({ user: this.user, password: this.password }, mailOptions);
        return send_through_gmail_1.sendThroughGmail(payload);
    }
}
exports.GmailSender = GmailSender;
