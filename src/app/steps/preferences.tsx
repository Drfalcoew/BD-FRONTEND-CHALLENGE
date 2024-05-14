import React, { useState } from 'react';
import { StepProps } from '../page';
import './steps.css';

const Preferences: React.FC<StepProps> = ({ onNext, onPrev, updateFormData }) => {
    const [notifications, setNotifications] = useState(false);
    const [shareInformation, setShareInformation] = useState(false);
    const [notificationPreference, setNotificationPreference] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const formData = {
            notifications,
            shareInformation,
            notificationPreference
        };
        updateFormData(formData);
        onNext();
    }

    return (
        <form onSubmit={handleSubmit} className='contact-form'>
            <div className='contact-form-group contact-form-checkbox-group'>
                <input
                    className='contact-form-checkbox'
                    type='checkbox'
                    id='wantsNotifications'
                    name='wantsNotifications'
                    checked={notifications}
                    onChange={(e) => setNotifications(e.target.checked)}
                />
                <label className='contact-form-label' htmlFor='wantsNotifications'>Send notifications</label>
            </div>

            <div className='contact-form-group contact-form-checkbox-group'>
                <input
                    className='contact-form-checkbox'
                    type='checkbox'
                    id='shareInformation'
                    name='shareInformation'
                    checked={shareInformation}
                    onChange={(e) => setShareInformation(e.target.checked)}
                />
                <label className='contact-form-label' htmlFor='shareInformation'>Share information with related marketers</label>
            </div>

            <div className='contact-form-group'>
                <label className='contact-form-label' htmlFor='notificationPreferences'>Notification Preferences</label>
                <select
                    className='contact-form-field'
                    id='notificationPreferences'
                    name='notificationPreferences'
                    value={notificationPreference}
                    onChange={(e) => setNotificationPreference(e.target.value)}
                    required={notifications}
                >
                    <option value=''>Select notification preference</option>
                    <option value='email'>Email</option>
                    <option value='text'>Text</option>
                </select>
            </div>

            <div className="form-actions">
                <button className="form-btn" type='submit'>
                    {'Register'}
                </button>
                <button className="form-btn" onClick={onPrev}>
                    {'<- Back'} 
                </button>
            </div>
        </form>
    );
}

export default Preferences;
