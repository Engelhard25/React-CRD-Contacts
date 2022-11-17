import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../../models/Contact';

const ContactForm = ({add}) => {

    const NameRef = useRef('');
    const PhoneRef= useRef('');

    function AddContact(e) {
        e.preventDefault();
        const newContact = new Contact(
        NameRef.current.value,
        PhoneRef.current.value,
        false
        );
        add(newContact);
    };

    return (
        <form onSubmit={AddContact} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={NameRef} id='input-name' type='text' required autoFocus placeholder='Contact name' className='form-control form-control-lg'/>
                <input ref={PhoneRef} id='input-phone' type='text' required placeholder='Contact phone' className='form-control fomr-control-lg'/>
            </div>
            <button type='submit' className='btn btn-success btn-lg ms-2'>
                <p>Create new contact</p>
            </button>
        </form>
    );
}

ContactForm.Prototypes = {
    add: PropTypes.func.isRequired
}

export default ContactForm;

