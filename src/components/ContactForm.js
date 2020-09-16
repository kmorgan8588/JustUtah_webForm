import React, { useState } from 'react';
import useForm from '../hooks/useForm'


const ContactForm = (props) => {
    const [success, setSuccess] = useState(false);

    const { fields, handleSubmit, handleChange, reset } = useForm(() => console.log(fields));

    return (
        <div className="form-style">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Contact Us</legend>
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
                    <input type="text" name="birthDate" placeholder="MM/DD/YYYY *" value={fields.birthDate || ""} onChange={handleChange} required />
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
