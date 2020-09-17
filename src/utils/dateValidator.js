const dateValidator = (date) => {
    if (!Date.parse(date)) {
        return false;
    }

    const realDate = new Date(date);
    realDate.setHours(24, 0, 0, 0);

    if (realDate.getTime() > new Date().getTime() || realDate.getTime() < new Date('1900-01-01').getTime()) {
        return false;
    }

    return true;
}

export default dateValidator;
