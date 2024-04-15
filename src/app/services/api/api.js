const url = "https://76ivja6qn6.execute-api.us-east-1.amazonaws.com/prod/"

export const apiHandler = async (request, args, headers, content) => {
    const defaultHeaders = {
        'Content-Type': '',
        'Accept': '',
        'Authorization': '',
        'User-Agent': ''
    };

    if (request === 'post') {
        return await Post(args,
            headers ? headers : defaultHeaders,
            content);
    }

    else if (request ==='get') {
        return await Get(args,
            headers ? headers : defaultHeaders);
    }
}

async function Post(args, headers, content) {
    try {
        const response = await fetch(url + args, {
            headers: headers,
            method: 'POST',
            body: JSON.stringify(content)
        }).then((res) => {
            console.log('api post status', res.status);
            return res.status;
        });
    } catch (e) {
        console.log('error in post', e);
        return null;
    }
}

// async function Get(args, headers) {
//     const response = await fetch(url + args, {
//         headers: headers,
//         method: 'GET',
//     }).then((res) => {
//         return res.json();
//     });
// }

export default apiHandler()