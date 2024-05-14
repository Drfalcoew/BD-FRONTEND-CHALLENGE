import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'; // Import necessary icons
import { StepProps } from '../page';
import './steps.css';

const Account: React.FC<StepProps> = ({ onNext, formData, updateFormData }) => {

    const handleSubmit = (e: any) => {
        e.preventDefault();

        // password greater than 10 characters
        if (e.currentTarget.password.value.length < 10) {
            alert('Password must be at least 10 characters long');
            return;
        }

        if (e.currentTarget.password.value !== e.currentTarget.confirmPassword.value) {
            alert('Passwords do not match');
            return;
        }

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        updateFormData(data);
        onNext();
    }

    return (
        <form onSubmit={handleSubmit} className='contact-form'>
            <div className='contact-form-outer-group'>
                <div className='contact-form-group'>
                    <label className='contact-form-label' htmlFor='firstname'>
                        <FontAwesomeIcon icon={faUser} width={12} /> First Name *
                    </label>
                    <input className='contact-form-field' defaultValue={formData.firstname || ''}
                    type='text' id='firstname' name='firstname' required />
                </div>
                <div className='contact-form-group'>
                    <label className='contact-form-label' htmlFor='lastname'>
                        <FontAwesomeIcon icon={faUser} width={12} /> Last Name *
                    </label>
                    <input className='contact-form-field' defaultValue={formData.lastname || ''} 
                    type='text' id='lastname' name='lastname' required />
                </div>
            </div>
            <div className='contact-form-group'>
                <label className='contact-form-label' htmlFor='username'>
                    <FontAwesomeIcon icon={faUser} width={12} /> Username *
                </label>
                <input className='contact-form-field contact-form-single' defaultValue={formData.username || ''}
                type='username' id='username' name='username' required />
            </div>
            <div className='contact-form-group'>
                <label className='contact-form-label' htmlFor='email'>
                    <FontAwesomeIcon icon={faEnvelope} width={12} /> Email *
                </label>
                <input className='contact-form-field contact-form-single' defaultValue={formData.email || ''}
                type='email' id='email' name='email' required />
            </div>

            <div className='contact-form-outer-group'>
                <div className='contact-form-group'>
                    <label className='contact-form-label' htmlFor='password'>
                        <FontAwesomeIcon icon={faLock} width={12} /> Password *
                    </label>
                    <input className='contact-form-field' defaultValue={formData.password || ''}
                    type='password' id='password' name='password' required />
                </div>
                <div className='contact-form-group'>
                    <label className='contact-form-label' htmlFor='lastname'>
                        <FontAwesomeIcon icon={faLock} width={12} /> Confirm Password *
                    </label>
                    <input className='contact-form-field'  defaultValue={formData.confirmPassword || ''}
                    type='password' id='confirmPassword' name='confirmPassword' required />
                </div>
            </div>

            <div className="form-actions">
                <button className="form-btn" type="submit">
                    {'Next Step ->'}
                </button>
            </div>
        </form>
    );
}

export default Account;
