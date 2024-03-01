import * as Mail from 'nodemailer/lib/mailer';
import * as SMTPTransport from 'nodemailer/lib/smtp-transport';
export declare type MailOptions = Mail.Options;
export interface SendThroughGmailPayload extends MailOptions {
    user: string;
    password: string;
}
export declare type SentMessageInfo = SMTPTransport.SentMessageInfo;
export declare function sendThroughGmail(payload: SendThroughGmailPayload): Promise<SentMessageInfo>;
