import { useState } from 'react';


const useForm = (callback) => {

    const [fields, setFields] = useState({});

    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
        }

        callback();
    }

    const handleChange = (event) => {
        const newFields = {
            ...fields,
            [event.target.name]: event.target.value,
        }
        setFields(newFields);
    };

    const reset = () => {
        setFields({});
    }

    return { fields, handleChange, handleSubmit, reset };

}


export default useForm;
