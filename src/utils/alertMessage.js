const alertMessage = (event) => {
    event.preventDefault();
    alert("Please choose a date after December 31st 1899 and before today");
}

export default alertMessage;
