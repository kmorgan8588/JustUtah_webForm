const dateValidator = (date) => {
    if (!Date.parse(date)) {
        return false;
    }

    const realDate = new Date(date).getTime();

    if (realDate > new Date().getTime() || realDate < new Date('1900-01-01').getTime()) {
        return false;
    }

    return true;
}

export default dateValidator;
