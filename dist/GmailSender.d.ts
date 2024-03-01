import { MailOptions, SentMessageInfo } from './send-through-gmail';
export declare class GmailSender {
    user: string;
    password: string;
    constructor(user: string, password: string);
    sendMail(mailOptions?: MailOptions): Promise<SentMessageInfo>;
}
