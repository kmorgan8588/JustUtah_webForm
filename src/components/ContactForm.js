import React, { useState, useEffect } from 'react';
import useForm from '../hooks/useForm';
import dateValidator from '../utils/dateValidator';
import postEmail from '../utils/postEmail';

const ContactForm = (props) => {
    const [success, setSuccess] = useState(false);
    const [validDate, setValidDate] = useState(false);

    const handleSend = () => {
        postEmail('https://my-json-server.typicode.com/JustUtahCoders/interview-users-api/users', fields)
            .then(response => console.log(response))
            .then(() => setSuccess(true))
            .then(() => reset())
            .catch((err) => alert(err));
    }

    const { fields, handleSubmit, handleChange, reset } = useForm(handleSend);

    const alertMessage = (event) => {
        event.preventDefault();
        alert("Please ensure you've chosen a valid birthday");
    }

    useEffect(() => {
        if (dateValidator(fields.birthDate)) {
            setValidDate(true)
        } else {
            setValidDate(false);
        }
    }, [fields.birthDate])

    return (
        <div className="form-style">
            <form onSubmit={validDate ? handleSubmit : alertMessage}>
                <fieldset>
                    <legend>Contact Us</legend>

                    {success ? <span>Thanks for your submission</span> : null}
                    <br />
                    <label>Name</label>
                    <br />
                    <input type="text" name="name" placeholder="Your Name *" value={fields.name || ""} onChange={handleChange} required />
                    <br />
                    <label>Email</label>
                    <br />
                    <input type="email" name="email" placeholder="Your Email *" value={fields.email || ""} onChange={handleChange} required />
                    <br />
                    <label>Birth date</label>
                    <br />
                    <input type="date" name="birthDate" min="1900-01-01" max={new Date().getTime()} value={fields.birthDate || ""} onChange={handleChange} required />
                    <br />
                    <div className="checkbox">
                        <label >
                            <input type="checkbox" id="emailConsent" name="emailConsent" checked={fields.emailConsent || false} onChange={handleChange} required />
                            I agree to be contacted via email
                        </label>
                    </div>
                </fieldset>
                <div id="button-container">
                    <button onClick={reset}>Clear</button>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
};


export default ContactForm;
