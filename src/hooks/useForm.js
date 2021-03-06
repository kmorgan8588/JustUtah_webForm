import { useState } from 'react';


const useForm = (callback) => {

    const [fields, setFields] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        callback();
    }

    const handleChange = (event) => {
        const newFields = {
            ...fields,
            [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value,
        }
        setFields(newFields);
    };

    const reset = () => {
        setFields({});
    }

    return { fields, handleChange, handleSubmit, reset };

}


export default useForm;
