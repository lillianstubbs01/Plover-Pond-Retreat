import { apiHandler } from '../api/api';

const args = 'emailservice';
// ApiHandler(request, args, headers={}, content={})
const emailHeaders = {
    'Content-Type': '',
    'Accept': '',
    'Authorization': '',
    'User-Agent': '',
    'Access-Control-Allow-Origin': 'https://lillianstubbs01.github.io'
};

export const messagingService = async (name, email, message) => {
    const messageBody = {
        "name": name,
        "email": email,
        "message": message
    }

    let res = apiHandler("post", args, emailHeaders, messageBody);
    return res;
}
