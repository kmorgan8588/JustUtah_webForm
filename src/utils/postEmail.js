const postEmail = (url = '', data = {}) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return fetch(url, options)
    // .then(response => response.json());
};

export default postEmail;