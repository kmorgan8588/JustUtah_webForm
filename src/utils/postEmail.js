const postEmail = (url = '', data = {}) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return fetch(url, options)
};

export default postEmail;