import React, { useState } from 'react';
import useForm from '../hooks/useForm'


const ContactForm = (props) => {
    const [success, setSuccess] = useState(false);

    const { fields, handleSubmit, handleChange, reset } = useForm(() => console.log(fields));

    return (
        <div className="form-style">
            <form>
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
                    <input type="checkbox" name="emailConsent" value={fields.emailConsent || false} onChange={handleChange} required />
                    <label htmlFor="emailConsent">I agree to be contacted via email</label>
                </fieldset>
                <button onClick={reset}>Clear</button>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
};


export default ContactForm;
