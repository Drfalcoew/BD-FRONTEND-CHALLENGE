import React from 'react';
import { useState } from 'react';
import { StepProps } from '../page';
import './steps.css';

const Account: React.FC<StepProps> = ({ onNext, formData, updateFormData }) => {


    const handleSubmit = (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        updateFormData(data);
        onNext();
    }

    return (
        <form onSubmit={handleSubmit} className='contact-form'>
            <div className='contact-form-outer-group'>
                <div className='contact-form-group'>
                    <label className='contact-form-label' htmlFor='firstname'>First Name *</label>
                    <input className='contact-form-field' defaultValue={formData.firstname || ''}
                    type='text' id='firstname' name='firstname' required />
                </div>
                <div className='contact-form-group'>
                    <label className='contact-form-label' htmlFor='lastname'>Last Name *</label>
                    <input className='contact-form-field' defaultValue={formData.lastname || ''} 
                    type='text' id='lastname' name='lastname' required />
                </div>
            </div>
            <div className='contact-form-group'>
                <label className='contact-form-label' htmlFor='username'>Username *</label>
                <input className='contact-form-field contact-form-single' defaultValue={formData.username || ''}
                type='username' id='username' name='username' required />
            </div>
            <div className='contact-form-group'>
                <label className='contact-form-label' htmlFor='email'>Email *</label>
                <input className='contact-form-field contact-form-single' defaultValue={formData.email || ''}
                type='email' id='email' name='email' required />
            </div>

            <div className='contact-form-outer-group'>
                <div className='contact-form-group'>
                    <label className='contact-form-label' htmlFor='password'>Password *</label>
                    <input className='contact-form-field' defaultValue={formData.password || ''}
                    type='password' id='password' name='password' required />
                </div>
                <div className='contact-form-group'>
                    <label className='contact-form-label' htmlFor='lastname'>Confirm Password *</label>
                    <input className='contact-form-field'  defaultValue={formData.confirmPassword || ''}
                    type='password' id='confirmpassword' name='confirmPassword' required />
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