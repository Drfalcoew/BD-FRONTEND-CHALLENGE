import React from 'react';
import { StepProps } from '../page';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faBuilding, faMapMarkerAlt, faCity, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Import necessary icons
import './steps.css';

const Address: React.FC<StepProps> = ({ onNext, onPrev, formData, updateFormData }) => {

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        updateFormData(data);
        onNext();
    };

    return (
        <form onSubmit={handleSubmit} className='contact-form'>
            <div className='contact-form-outer-group'>
                <div className='contact-form-group contact-form-double'>
                    <label className='contact-form-label' htmlFor='address1'>
                        <FontAwesomeIcon icon={faMapMarkerAlt} /> Address *
                    </label>
                    <input className='contact-form-field' defaultValue={formData.address || ''} type='text' id='address1' name='address1' required />
                </div>
                <div className='contact-form-group contact-form-double'>
                    <label className='contact-form-label' htmlFor='address2'>
                        <FontAwesomeIcon icon={faBuilding} /> Apartment, Suite, etc.
                    </label>
                    <input className='contact-form-field' defaultValue={formData.suite || ''} type='text' id='address2' name='address2' />
                </div>
            </div>
            <div className='contact-form-outer-group'>
                <div className='contact-form-group contact-form-triple'>
                    <label className='contact-form-label' htmlFor='country'>
                        <FontAwesomeIcon icon={faAddressCard} /> Country *
                    </label>
                    <select className='contact-form-field contact-form-triple contact-form-select' defaultValue={formData.country || ''} id='country' name='country' required>
                        <option value=''>Select a country</option>
                        <option value='US'>United States</option>
                        <option value='UK'>United Kingdom</option>
                        <option value='Canada'>Canada</option>
                        <option value='Australia'>Australia</option>
                        <option value='Germany'>Germany</option>
                    </select>
                </div>
                <div className='contact-form-group contact-form-triple'>
                    <label className='contact-form-label' htmlFor='city'>
                        <FontAwesomeIcon icon={faCity} /> City *
                    </label>
                    <input className='contact-form-field contact-form-triple' defaultValue={formData.city || ''} type='text' id='city' name='city' required />
                </div>
                <div className='contact-form-group contact-form-triple'>
                    <label className='contact-form-label' htmlFor='zipCode'>
                        <FontAwesomeIcon icon={faEnvelope} /> Zipcode *
                    </label>
                    <input className='contact-form-field contact-form-triple' defaultValue={formData.zipcode || ''} type='text' id='zipCode' name='zipCode' required />
                </div>
            </div>
            <div className='contact-form-group'>
                <label className='contact-form-label' htmlFor='company'>
                    <FontAwesomeIcon icon={faBuilding} /> Company
                </label>
                <input className='contact-form-field contact-form-single' defaultValue={formData.company || ''} type='text' id='company' name='company' />
            </div>
            <div className='contact-form-group'>
                <label className='contact-form-label' htmlFor='phoneNumber'>
                    <FontAwesomeIcon icon={faEnvelope} /> Phone Number *
                </label>
                <input className='contact-form-field contact-form-single' defaultValue={formData.phone || ''} required type='text' id='phoneNumber' name='phoneNumber' />
            </div>
            <div className="form-actions">
                <button className="form-btn" type='submit'>
                    {'Next Step ->'}
                </button>
                <button className="form-btn" onClick={onPrev}>
                    {'<- Back'} 
                </button>
            </div>
        </form>
    );
}

export default Address;
