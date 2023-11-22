async function ApiHandler(props) {
    const defaultHeaders = {
        'Content-Type': '',
        'Accept': '',
        'Authorization': '',
        'User-Agent': ''
    };

    if (props.request === 'post') {
        return await Post(props.args,
            props.headers ? props.headers : defaultHeaders,
            props.content);
    }

    else if (props.request ==='get') {
        return await Get(props.args,
            props.headers ? props.headers : defaultHeaders);
    }
}

async function Post(args, headers, content) {
    const response = await fetch('apiurl/' + args, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify(content)
    }).then((res) => {
        return res.json();
    });
}

async function Get(args, headers) {
    const response = await fetch('apiurl/' + args, {
        headers: headers,
        method: 'GET',
    }).then((res) => {
        return res.json();
    });
}

export default ApiHandler