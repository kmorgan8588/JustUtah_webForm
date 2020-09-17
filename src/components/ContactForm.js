import React, { useState, useEffect } from 'react';
import useForm from '../hooks/useForm';
import dateValidator from '../utils/dateValidator';
import postEmail from '../utils/postEmail';
import alertMessage from '../utils/alertMessage';

const ContactForm = (props) => {
    const [success, setSuccess] = useState(false);
    const [validDate, setValidDate] = useState(false);

    const handleSend = () => {
        postEmail('https://my-json-server.typicode.com/JustUtahCoders/interview-users-api/users', fields)
            .then(response => response.status)
            .then(code => {
                if (code === 201) {
                    setSuccess(true);
                } else {
                    throw new Error('Something went wrong, please try again')
                }
            })
            .then(() => reset())
            .catch((err) => alert(err));
    }

    const { fields, handleSubmit, handleChange, reset } = useForm(handleSend);


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

                    {success ? <span data-testid="success">Thanks for your submission</span> : null}
                    <br />
                    <label htmlFor='name'>Name</label>
                    <br />
                    <input type="text" id='name' name="name" placeholder="Your Name*" pattern="^(\w\w+)\s(\w+)$" title="First (space) Last" value={fields.name || ""} onChange={handleChange} required />
                    <br />
                    <label htmlFor='email'>Email</label>
                    <br />
                    <input type="email" id='email' name="email" placeholder="Your Email*" value={fields.email || ""} onChange={handleChange} required />
                    <br />
                    <label>Birth date</label>
                    <br />
                    <input type="date" data-testid="date-input" name="birthDate" value={fields.birthDate || ""} onChange={handleChange} required />
                    <br />
                    <div className="checkbox">
                        <label >
                            <input type="checkbox" id="emailConsent" name="emailConsent" checked={fields.emailConsent || false} onChange={handleChange} required />
                            I agree to be contacted via email
                        </label>
                    </div>
                </fieldset>
                <div id="button-container">
                    <button onClick={() => {
                        setSuccess(false);
                        reset();
                    }}>Clear</button>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
};


export default ContactForm;
