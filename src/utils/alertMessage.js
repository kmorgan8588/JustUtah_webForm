const alertMessage = (event) => {
    event.preventDefault();
    alert("Please choose a date after 1900-1-1 and before today");
}

export default alertMessage;
