import { apiHandler } from '../api/api';

const args = 'emailservice';
// ApiHandler(request, args, headers={}, content={})

export const messagingService = async (name, email, message) => {
    const messageBody = {
        "name": name,
        "email": email,
        "message": message
    }

    let res = apiHandler("post", args, {}, messageBody);
    return res;
}
